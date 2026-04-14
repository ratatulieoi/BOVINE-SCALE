import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { Link, useLocation } from 'react-router-dom'

const errorImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCOZiUw8b8UfcREmJWP55g5-pXDlTYGpuZHnXarAmHOXMu_GWiA9HCF-86MvFqeguwf6MO5xNU0Fqg6e8kCiuZPRnaeQLTnMcIr18vbHTLxjptZPNX5Ghw9toxvQX4pVwHwDe47tc4CgWFJEUVvZJC3hBSgALxftOEQeo4S4_p6a3votXa5k4uNmDI2-L2eWy6yz-MkbzE699IGCovfs_R1W2-9YiNq4cXtP-Ds-bo8vm0DIBXoIrUD_jhCsxf7vnIDjU9nawXzzlk'

function ErrorPage() {
  const location = useLocation()
  const message = (location.state as { message?: string } | null)?.message

  return (
    <div className="page-shell mobile-safe-space flex min-h-screen flex-col">
      <Navbar />

      <main className="flex flex-grow items-center justify-center p-6 sm:p-12">
        <div className="content-shell flex max-w-4xl flex-col items-center gap-12 md:flex-row md:gap-24">
          <div className="relative aspect-[4/5] w-full max-w-sm rotate-[-2deg] overflow-hidden rounded-xl bg-surface-container-high shadow-xl md:rotate-[-4deg]">
            <img alt="Grainy photograph of a single brown cow in an empty misty field" className="h-full w-full object-cover brightness-90 grayscale" src={errorImage} />
            <div className="absolute inset-0 bg-error/10 mix-blend-multiply" />

            <div className="absolute right-6 bottom-6 left-6 rounded-lg bg-white/70 p-4 backdrop-blur-md">
              <div className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-error">
                <span className="material-symbols-outlined text-sm">warning</span>
                System Alert
              </div>
              <p className="font-headline text-lg leading-tight font-bold text-on-surface">Image Analysis Failed</p>
            </div>
          </div>

          <div className="flex flex-1 flex-col items-center space-y-8 text-center md:items-start md:text-left">
            <div className="space-y-4">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-error-container text-on-error-container">
                <span className="material-symbols-outlined text-4xl">heart_broken</span>
              </div>

              <h1 className="font-headline text-4xl leading-none font-extrabold tracking-tight text-on-surface md:text-5xl">
                No Cow Detected
              </h1>

              <p className="max-w-md text-lg text-on-surface-variant">
                {message || "Our system couldn't identify a bovine subject in your last upload. This usually happens when the subject is partially obscured or the lighting is too flat."}
              </p>
            </div>

            <div className="grid w-full max-w-sm grid-cols-1 gap-4">
              <div className="group rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container-high">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-primary">light_mode</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">Poor Lighting</h3>
                    <p className="text-sm text-on-surface-variant">
                      Ensure the animal is well-lit without heavy shadows across its frame.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-surface-container-low p-6 transition-colors hover:bg-surface-container-high">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined mt-1 text-primary">crop_free</span>
                  <div>
                    <h3 className="font-headline font-bold text-on-surface">Framing Issues</h3>
                    <p className="text-sm text-on-surface-variant">The cow should fill at least 40% of the frame for proper scaling.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-full flex-col gap-4 sm:flex-row">
              <Link
                to="/upload"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 font-headline text-lg font-bold text-on-primary shadow-lg transition-all hover:shadow-xl active:scale-95 active:opacity-80"
              >
                <span className="material-symbols-outlined">upload_file</span>
                Try Again
              </Link>

              <button
                type="button"
                className="flex flex-1 items-center justify-center gap-2 rounded-full bg-surface-container-highest px-8 py-4 font-headline text-lg font-bold text-on-surface transition-all hover:bg-surface-container-high"
              >
                <span className="material-symbols-outlined">help</span>
                Get Support
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

export default ErrorPage
