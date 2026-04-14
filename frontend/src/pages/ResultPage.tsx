import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { Link, Navigate } from 'react-router-dom'

type PredictionResult = {
  imageUrl?: string
  fileName?: string
  cow_detected?: boolean
  total_cows?: number
  estimated_weight_kg?: number | null
  confidence?: number
  notes?: string
  model?: string
}

function ResultPage() {
  const savedResult = localStorage.getItem('prediction_result')
  const result: PredictionResult | null = savedResult ? JSON.parse(savedResult) : null

  if (!result?.cow_detected) {
    return <Navigate to="/upload" replace />
  }

  const confidence = Math.round((result.confidence || 0) * 100)

  return (
    <div className="page-shell mobile-safe-space">
      <Navbar />

      <main className="content-shell flex flex-col items-center px-6 py-12 md:py-20">
        <div className="mb-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary-container">
            <span
              className="material-symbols-outlined text-4xl text-on-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <h1 className="font-headline text-4xl leading-tight font-extrabold tracking-tight text-on-surface md:text-5xl">
            Estimation Complete
          </h1>
          <p className="mt-3 text-lg text-on-surface-variant">Here's the temporary estimated weight for your livestock.</p>
        </div>

        <div className="mb-8 aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-low shadow-xl">
          <img src={result.imageUrl} alt={result.fileName || 'Uploaded cow'} className="h-full w-full object-cover" />
        </div>

        <div className="mb-12 w-full max-w-md rounded-2xl border border-outline-variant/10 bg-surface-container-low p-10 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">Estimated Weight</p>
          <p className="mt-4 font-headline text-7xl font-extrabold text-primary">
            {result.estimated_weight_kg ?? '-'}
            <span className="text-2xl font-bold text-on-surface-variant"> kg</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2">
            <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
              analytics
            </span>
            <span className="text-sm font-bold text-on-secondary-container">Confidence: {confidence}%</span>
          </div>
        </div>

        <div className="mb-12 grid w-full max-w-md grid-cols-2 gap-4">
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Detected</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">{result.cow_detected ? 'Yes' : 'No'}</p>
          </div>
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Total Cows</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">{result.total_cows || 0}</p>
          </div>
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Model</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">{result.model || '-'}</p>
          </div>
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">File</p>
            <p className="mt-1 truncate font-headline text-lg font-bold text-on-surface">{result.fileName || '-'}</p>
          </div>
        </div>

        {result.notes ? (
          <div className="mb-10 w-full max-w-md rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center text-sm text-on-surface-variant">
            {result.notes}
          </div>
        ) : null}

        <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <Link
            to="/upload"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-headline text-lg font-bold text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
          >
            <span className="material-symbols-outlined">refresh</span>
            New Estimate
          </Link>
          <Link
            to="/history"
            className="flex flex-1 items-center justify-center gap-2 rounded-full bg-surface-container-highest px-8 py-4 font-headline text-lg font-bold text-on-surface transition-all hover:bg-surface-container-high"
          >
            <span className="material-symbols-outlined">history</span>
            View History
          </Link>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}

export default ResultPage
