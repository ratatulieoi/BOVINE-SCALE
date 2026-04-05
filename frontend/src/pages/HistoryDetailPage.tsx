import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { Link, useParams } from 'react-router-dom'

const mockDetail = {
  id: '1',
  date: '2026-04-04',
  time: '14:32',
  estimatedWeight: 342,
  unit: 'kg',
  breed: 'Holstein',
  confidence: 0.87,
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhdUvKTDIddXwoQFeBoJNI6rxgVr5f-qfKm8-2Nuv1hAJi04Ye1LIBgUWwKXlDBcUROZgn-mwjP2cRVSiKt05W_V6aQWhOGBcHJCryGZ0noVK5FAMs51FZ67yXVhRHVqHA8AEYU40mYPeTG8zmfKdGnfTD7LROcZJg4H8fR-UuxXBk7tZzb6z18deDL5e7eZ5Q22lNgQc1dVyuYOOf2P2EzYxzMIlQUTb-8SDz1ojBGhGe71psbOvpclXIO2QRhavaLw-1SQk9Msk',
  boundingBox: { x: 120, y: 80, width: 640, height: 480 },
  dimensions: { length: 165, height: 138, unit: 'cm' },
  notes: 'Good side-profile capture. Natural lighting conditions.',
}

function HistoryDetailPage() {
  const { id } = useParams<{ id: string }>()
  const entry = mockDetail

  return (
    <div className="page-shell mobile-safe-space">
      <Navbar />

      <main className="content-shell px-6 py-12 md:py-20">
        <div className="mb-8">
          <Link
            to="/history"
            className="inline-flex items-center gap-2 text-sm font-medium text-on-surface-variant transition-colors hover:text-primary"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
            Back to History
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low shadow-lg">
            <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-highest">
              <img
                src={entry.image}
                alt={`Bovine estimate from ${entry.date}`}
                className="h-full w-full object-cover"
              />
              <div
                className="absolute border-2 border-primary/80"
                style={{
                  top: `${(entry.boundingBox.y / 600) * 100}%`,
                  left: `${(entry.boundingBox.x / 800) * 100}%`,
                  width: `${(entry.boundingBox.width / 800) * 100}%`,
                  height: `${(entry.boundingBox.height / 600) * 100}%`,
                }}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="font-headline text-4xl leading-tight font-extrabold tracking-tight text-on-surface md:text-5xl">
                Estimation Report
              </h1>
              <p className="mt-2 text-on-surface-variant">
                {entry.date} at {entry.time}
              </p>
            </div>

            <div className="rounded-xl bg-surface-container-low p-8 text-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">Estimated Weight</p>
              <p className="mt-2 font-headline text-6xl font-extrabold text-primary">
                {entry.estimatedWeight}
                <span className="text-2xl font-bold text-on-surface-variant"> {entry.unit}</span>
              </p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <span className="text-sm font-bold text-on-secondary-container">
                  Confidence: {Math.round(entry.confidence * 100)}%
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Breed</p>
                <p className="mt-1 font-headline text-xl font-bold text-on-surface">{entry.breed}</p>
              </div>
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Length</p>
                <p className="mt-1 font-headline text-xl font-bold text-on-surface">
                  {entry.dimensions.length} {entry.dimensions.unit}
                </p>
              </div>
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Height</p>
                <p className="mt-1 font-headline text-xl font-bold text-on-surface">
                  {entry.dimensions.height} {entry.dimensions.unit}
                </p>
              </div>
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Estimate ID</p>
                <p className="mt-1 font-mono text-sm font-bold text-on-surface">#{entry.id.padStart(6, '0')}</p>
              </div>
            </div>

            {entry.notes && (
              <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Notes</p>
                <p className="mt-2 text-sm text-on-surface-variant">{entry.notes}</p>
              </div>
            )}

            <div className="flex gap-4">
              <Link
                to="/upload"
                className="flex-1 rounded-full bg-primary px-6 py-4 text-center font-headline text-lg font-bold text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
              >
                New Estimate
              </Link>
              <button
                type="button"
                className="flex-1 rounded-full bg-surface-container-highest px-6 py-4 text-center font-headline text-lg font-bold text-on-surface transition-all hover:bg-surface-container-high"
              >
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}

export default HistoryDetailPage
