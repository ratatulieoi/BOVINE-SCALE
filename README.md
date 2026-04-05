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
