import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

function ResultPage() {
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
          <p className="mt-3 text-lg text-on-surface-variant">
            Here's the estimated weight for your livestock.
          </p>
        </div>

        <div className="mb-12 w-full max-w-md rounded-2xl border border-outline-variant/10 bg-surface-container-low p-10 text-center shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-on-surface-variant">Estimated Weight</p>
          <p className="mt-4 font-headline text-7xl font-extrabold text-primary">
            342
            <span className="text-2xl font-bold text-on-surface-variant"> kg</span>
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              analytics
            </span>
            <span className="text-sm font-bold text-on-secondary-container">Confidence: 87%</span>
          </div>
        </div>

        <div className="mb-12 grid w-full max-w-md grid-cols-2 gap-4">
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Breed</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">Holstein</p>
          </div>
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Length</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">165 cm</p>
          </div>
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Height</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">138 cm</p>
          </div>
          <div className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-5 text-center">
            <p className="text-xs font-semibold uppercase tracking-wider text-on-surface-variant">Date</p>
            <p className="mt-1 font-headline text-lg font-bold text-on-surface">Apr 05</p>
          </div>
        </div>

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
