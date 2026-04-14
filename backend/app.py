from base64 import b64encode
from pathlib import Path

import requests
from flask import Flask, jsonify, request
from flask_cors import CORS

BASE_DIR = Path(__file__).resolve().parent
OPENAI_BASE_URL = "http://127.0.0.1:8317/v1"
OPENAI_API_KEY = "sk-relayapikey"
OPENAI_MODEL = "gpt-5.4"

app = Flask(__name__)
CORS(app)


def analyze_image_with_llm(image_bytes: bytes, mime_type: str):
    image_base64 = b64encode(image_bytes).decode("utf-8")

    prompt = (
        "Analyze this image carefully. "
        "Your job: "
        "1. Decide whether there is at least one cow visible in the image. "
        "2. If yes, estimate the number of cows. "
        "3. Focus on the main cow only, meaning the cow that is most visible, most centered, or most dominant in the image. "
        "4. Estimate the weight of that main cow in kilograms. "
        "When analyzing, consider camera angle and perspective, distance from camera, whether the full body is visible or partially cut off, side view vs front/back view, body size and proportions, posture and standing position, breed clues if visible, body condition or muscularity, age clues if visible, lighting quality, blur, obstruction, shadows, background clutter, and whether multiple cows make the judgment less reliable. "
        "Important: It is okay if the estimate may be wrong. Be honest about uncertainty. If the image is unclear or estimation is weak, use lower confidence. Confidence must reflect how reliable your judgment is. If no cow is visible, estimated_weight_kg must be null. "
        "Return ONLY valid JSON with this exact schema: "
        '{"cow_detected": true, "total_cows": 1, "estimated_weight_kg": 320, "confidence": 0.82, "notes": "short explanation"}. '
        "Rules: cow_detected must be boolean, total_cows must be integer, estimated_weight_kg must be number or null, confidence must be between 0 and 1, notes must be short, no markdown, no extra text."
    )

    response = requests.post(
        f"{OPENAI_BASE_URL}/chat/completions",
        headers={
            "Authorization": f"Bearer {OPENAI_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": OPENAI_MODEL,
            "temperature": 0.2,
            "messages": [
                {
                    "role": "system",
                    "content": "You are a vision assistant for cattle detection and temporary cattle weight estimation from photos. Analyze images carefully and honestly. It is okay if the estimate is uncertain or wrong, but your confidence score must reflect that uncertainty. Lower confidence when the image quality, camera angle, distance, visibility, or body coverage makes estimation difficult.",
                },
                {
                    "role": "user",
                    "content": [
                        {"type": "text", "text": prompt},
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:{mime_type};base64,{image_base64}"
                            },
                        },
                    ],
                },
            ],
        },
        timeout=120,
    )

    response.raise_for_status()
    data = response.json()
    content = data["choices"][0]["message"]["content"]

    if isinstance(content, list):
        text_parts = [part.get("text", "") for part in content if isinstance(part, dict)]
        content = "".join(text_parts)

    return content


@app.get("/health")
def health():
    return jsonify(
        {
            "status": "ok",
            "provider": "openai-compatible",
            "base_url": OPENAI_BASE_URL,
            "model": OPENAI_MODEL,
        }
    )


@app.post("/predict")
def predict():
    if "image" not in request.files:
        return jsonify({"error": "Field 'image' wajib ada"}), 400

    file = request.files["image"]
    if not file or file.filename == "":
        return jsonify({"error": "File gambar belum dipilih"}), 400

    try:
        image_bytes = file.read()
        mime_type = file.mimetype or "image/jpeg"

        llm_result = analyze_image_with_llm(image_bytes, mime_type)

        return jsonify(
            {
                "success": True,
                "message": "Analisis berhasil",
                "provider": "llm",
                "model": OPENAI_MODEL,
                "result_raw": llm_result,
            }
        )
    except requests.RequestException as e:
        return jsonify({"error": "Gagal menghubungi LLM", "detail": str(e)}), 500
    except Exception as e:
        return jsonify({"error": "Gagal memproses gambar", "detail": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
