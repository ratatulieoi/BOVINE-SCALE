# BOVINE-SCALE 🐄

Aplikasi estimasi berat sapi berbasis AI (YOLOv8 + React + Flask).
Politeknik Elektronika Negeri Surabaya — Semester 4

---

## Struktur Project

```
BOVINE-SCALE/
├── frontend/                    # React + TS + Vite + Tailwind + shadcn/ui
│   ├── src/
│   │   ├── pages/               # Login, Dashboard, Upload, Result, History
│   │   ├── components/          # shadcn/ui + custom components
│   │   ├── lib/                 # API client, auth utilities
│   │   └── App.tsx              # Router + app shell
│   └── capacitor.config.ts      # Mobile packaging (APK)
│
├── backend/                     # Flask + Python + SQLite
│   ├── app.py                   # Main Flask app, semua routes
│   ├── models/
│   │   ├── yolo_model.py        # Load YOLOv8, run inference
│   │   └── weight_calc.py       # Bounding box → weight formula
│   ├── db.py                    # SQLite setup, CRUD operations
│   ├── auth.py                  # Login, session management
│   └── requirements.txt
│
└── ml/                          # Training scripts (run di Colab)
    ├── train.ipynb              # Google Colab notebook
    └── dataset_info.md          # Dataset source, download instructions
```

---

## Sprint Plan

### Sprint 1 — Core Pipeline (Minggu 1–3)
**Goal:** Foto sapi masuk → angka berat keluar di browser.

### Sprint 2 — Auth + Fitur + Mobile (Minggu 4–6)
**Goal:** Login, history, UI layak, APK jalan di HP.

### Sprint 3 — Polish + Siap Presentasi (Minggu 7–8)
**Goal:** Rapi, tidak crash, siap ditunjukkan ke dosen.
