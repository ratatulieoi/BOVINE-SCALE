import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'

const processingImage =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBG8WW-1iujMT7s6GW4wYneoqvcx9TdQkiBPZgVSV-7D7MhXa5D6qnHcDuHbP4tURFb0mmlYP2SL0vmWUqyN0CRLwQYXXrWNXRoyWmsW_C43THLx-zJ70txkwcup5YJ3xVuSAuGzCO_Ltlskk2Wrp5aO9IvKVi4-b6KZCQ1GRodas6vAyxNRsIb1kGodmPXfnMtNooCjpwZRBanVMOyo_FoA1xYU6rqVEell0B-HevaT3kX7fbE7GgSVmKpVd2ER_hFTqOzkOZrNdk'

function ProcessingPage() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          navigate('/result')
          return 100
        }
        return prev + 2
      })
    }, 80)

    return () => clearInterval(interval)
  }, [navigate])
  return (
    <div className="page-shell mobile-safe-space">
      <Navbar />

      <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-12">
        <div className="absolute top-0 left-0 -z-10 h-full w-full opacity-30">
          <div className="absolute top-[-10%] right-[-5%] h-96 w-96 rounded-full bg-primary-container/10 blur-3xl" />
          <div className="absolute bottom-[-5%] left-[-5%] h-80 w-80 rounded-full bg-secondary-fixed/20 blur-3xl" />
        </div>

        <div className="content-shell flex max-w-4xl flex-col items-center gap-12 md:flex-row">
          <div className="relative aspect-square w-full max-w-sm md:w-1/2">
            <div className="relative h-full w-full overflow-hidden rounded-xl bg-surface-container-high shadow-2xl">
              <img
                alt="Uploaded bovine image"
                className="h-full w-full object-cover brightness-90 grayscale-[40%]"
                src={processingImage}
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="scanner-line scanner-line-animated absolute left-0 w-full" />

              <div className="absolute top-4 left-4 h-8 w-8 rounded-tl-lg border-t-4 border-l-4 border-primary" />
              <div className="absolute top-4 right-4 h-8 w-8 rounded-tr-lg border-t-4 border-r-4 border-primary" />
              <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-lg border-b-4 border-l-4 border-primary" />
              <div className="absolute right-4 bottom-4 h-8 w-8 rounded-br-lg border-r-4 border-b-4 border-primary" />
            </div>

            <div className="absolute -top-4 -right-4 rounded-xl border border-outline-variant/15 bg-surface-container-lowest/90 p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
                <span className="font-label text-xs font-bold uppercase tracking-widest">Bovine Detected</span>
              </div>
            </div>
          </div>

          <div className="w-full space-y-8 text-center md:w-1/2 md:text-left">
            <div>
              <h1 className="mb-2 font-headline text-5xl font-extrabold tracking-tight text-on-surface">Processing Image...</h1>
              <p className="text-lg text-on-surface-variant">Our AI is analyzing body contours and bone structure.</p>
            </div>

            <div className="space-y-6 rounded-xl bg-surface-container-low p-8">
              <div className="space-y-3">
                <div className="flex items-end justify-between">
              <span className="font-label text-sm font-semibold text-primary">Scanning for Bovine features...</span>
                <span className="font-headline text-2xl font-bold text-primary">{progress}%</span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full rounded-full bg-primary transition-all duration-100" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-medium">Image Uploaded</span>
                </div>
                <div className="flex items-center gap-3 text-on-primary-fixed-variant">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-medium">Orientation Corrected</span>
                </div>
                <div className={progress > 80 ? 'animate-pulse text-primary flex items-center gap-3' : 'text-primary flex items-center gap-3'}>
                  <span className="material-symbols-outlined text-xl">{progress > 80 ? 'pending' : 'check_circle'}</span>
                  <span className={progress > 80 ? 'font-bold' : 'font-medium'}>Estimating Weight...</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 md:justify-start">
              <div className="flex items-center gap-2 rounded-full bg-secondary-container px-4 py-2 text-xs font-bold text-on-secondary-container">
                <span className="material-symbols-outlined text-sm">bolt</span>
                AI-DRIVEN ANALYSIS
              </div>
              <span className="font-label text-sm text-outline">Est. time remaining: 4s</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}

export default ProcessingPage
