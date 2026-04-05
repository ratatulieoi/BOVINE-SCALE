import Navbar from '../components/Navbar'
import heroImage from '../assets/hero.jpg'
import { Link } from 'react-router-dom'

function HeroPage() {
  return (
    <div className="relative min-h-screen w-full bg-black font-body text-white selection:bg-primary selection:text-on-primary">
      <div className="absolute inset-0 z-0">
        <img
          alt="Premium livestock standing in a field"
          className="h-full w-full scale-x-[-1] object-cover object-[35%_50%] opacity-90"
          src={heroImage}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40" />
      </div>

      <Navbar variant="hero" />

      <main className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col justify-end px-6 pb-12 sm:px-8 sm:pb-16 md:pb-20 lg:pb-28">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <h1 className="hero-text-shadow max-w-6xl font-headline text-[clamp(2.5rem,10vw,8.5rem)] leading-[0.9] font-bold tracking-tighter">
            Precision
            <br />
            <span className="italic text-white/95">Weight</span>
            <br />
            Estimation.
          </h1>

          <Link
            to="/upload"
            style={{ color: '#1b1c1a' }}
            className="group inline-flex w-fit items-center gap-3 self-start rounded-full bg-white px-8 py-4 text-base font-bold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:self-end"
          >
            Start to Weight
            <svg
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="#1b1c1a"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default HeroPage
