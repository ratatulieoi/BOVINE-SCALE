import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const previewImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAhdUvKTDIddXwoQFeBoJNI6rxgVr5f-qfKm8-2Nuv1hAJi04Ye1LIBgUWwKXlDBcUROZgn-mwjP2cRVSiKt05W_V6aQWhOGBcHJCryGZ0noVK5FAMs51FZ67yXVhRHVqHA8AEYU40mYPeTG8zmfKdGnfTD7LROcZJg4H8fR-UuzXBk7tZzb6z18deDL5e7eZ5Q22lNgQc1dVyuYOOf2P2EzYxzMIlQUTb-8SDz1ojBGhGe71psbOvpclXIO2QRhavaLw-1SQk9Msk'

const infoCards = [
  {
    icon: 'lightbulb',
    iconColor: 'text-tertiary',
    title: 'Better Lighting',
    description: 'Photos taken in natural morning or evening light provide the best muscle-mass definitions.',
  },
  {
    icon: 'photo_camera',
    iconColor: 'text-primary',
    title: 'Side Profiles Only',
    description: 'The AI requires a complete side profile of the bovine to calculate volumetric weight metrics.',
  },
  {
    icon: 'history',
    iconColor: 'text-secondary',
    title: 'Automated Logs',
    description: 'Every estimate is logged into your History with a timestamp for longitudinal growth tracking.',
  },
]

function UploadPage() {
  return (
    <div className="page-shell mobile-safe-space">
      <Navbar />

      <main className="content-shell flex flex-col items-center px-6 py-12 md:py-20">
        <div className="mb-16 max-w-2xl text-center">
          <h1 className="mb-6 font-headline text-5xl leading-tight font-extrabold tracking-tight text-on-surface md:text-6xl">
            <span className="text-primary italic">Weight</span> Estimation.
          </h1>
          <p className="text-lg leading-relaxed font-normal text-on-surface-variant">
            Upload a clear side-profile photo of your livestock. Our AI-driven agronomy platform calculates estimated weight.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="flex flex-col gap-6 lg:col-span-7">
            <div className="dotted-upload-border relative flex min-h-[460px] flex-col items-center justify-center rounded-xl bg-surface-container-high p-8 transition-all duration-300">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="editorial-shadow flex h-20 w-20 items-center justify-center rounded-full bg-primary-container">
                  <span className="material-symbols-outlined text-4xl text-on-primary-container">cloud_upload</span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-headline text-2xl font-bold text-on-surface">Drag and drop cow photo</h3>
                  <p className="font-medium text-on-surface-variant">JPEG or PNG, up to 10MB</p>
                </div>

                <button
                  type="button"
                  className="editorial-shadow rounded-full bg-surface-container-lowest px-8 py-3 font-semibold text-primary transition-all hover:bg-white active:scale-95"
                >
                  Choose File
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5">
            <div className="editorial-shadow flex h-full flex-col rounded-xl bg-surface-container-low p-6">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-headline text-xl font-bold text-on-surface">Image Preview</h4>
                <div className="flex items-center gap-2 rounded-full bg-secondary-container px-3 py-1">
                  <span
                    className="material-symbols-outlined text-sm text-on-secondary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="font-label text-xs font-bold uppercase tracking-wider text-on-secondary-container">Ready</span>
                </div>
              </div>

              <div className="mb-6 aspect-[4/3] overflow-hidden rounded-xl border border-outline-variant/15 bg-surface-container-highest">
                <img
                  className="h-full w-full object-cover grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
                  src={previewImage}
                  alt="High quality side profile of a healthy dairy cow standing in a green pasture"
                />
              </div>

              <div className="flex-grow space-y-4">
                <div className="flex items-center justify-between rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    <span className="font-label font-medium text-on-surface-variant">Analyzed Metadata</span>
                  </div>
                  <span className="font-bold text-on-surface">Pending</span>
                </div>

                <div className="flex items-center justify-between rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-4">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">straighten</span>
                    <span className="font-label font-medium text-on-surface-variant">Profile Alignment</span>
                  </div>
                  <span className="font-bold text-secondary">Optimal</span>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  to="/processing"
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-primary to-primary-container py-5 font-headline text-xl font-bold text-on-primary shadow-lg shadow-primary/20 transition-all hover:opacity-90 active:scale-95"
                >
                  Estimate Weight
                  <span className="material-symbols-outlined">trending_up</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {infoCards.map((card) => (
            <div key={card.title} className="rounded-xl border border-outline-variant/10 bg-surface-container-low p-8">
              <span className={`material-symbols-outlined mb-4 text-3xl ${card.iconColor}`}>{card.icon}</span>
              <h5 className="mb-2 font-headline font-bold text-on-surface">{card.title}</h5>
              <p className="font-body text-sm text-on-surface-variant">{card.description}</p>
            </div>
          ))}
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}

export default UploadPage
