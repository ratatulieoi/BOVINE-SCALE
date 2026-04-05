import { Link, NavLink } from 'react-router-dom'

type NavbarProps = {
  variant?: 'hero' | 'default'
}

const links = [
  { label: 'Upload', to: '/upload' },
  { label: 'History', to: '/history' },
]

function Navbar({ variant = 'default' }: NavbarProps) {
  if (variant === 'hero') {
    return (
      <nav className="relative z-50 mx-auto flex w-full max-w-[1600px] flex-wrap items-center gap-x-8 gap-y-4 px-6 py-6 sm:px-8 sm:py-8">
        <Link to="/" className="font-headline text-2xl font-extrabold tracking-tight text-white drop-shadow-md">
          Bovine<span className="text-primary-fixed">Scale</span>
        </Link>

        <div className="ml-auto flex flex-wrap items-center justify-end gap-x-6 gap-y-3 text-sm font-medium sm:gap-x-8 md:gap-x-12">
          <NavLink to="/upload" className="text-sm font-medium drop-shadow-sm transition-opacity hover:opacity-70">
            Upload
          </NavLink>
          <NavLink to="/history" className="text-sm font-medium drop-shadow-sm transition-opacity hover:opacity-70">
            History
          </NavLink>
          <a className="text-sm font-medium drop-shadow-sm transition-opacity hover:opacity-70" href="#footer">
            Contact
          </a>
        </div>
      </nav>
    )
  }

  return (
    <header className="sticky top-0 z-50 bg-surface">
      <nav className="content-shell flex items-center justify-between py-4">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-headline text-2xl font-extrabold tracking-tight text-on-surface">
            Bovine<span className="text-primary-fixed">Scale</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map(({ label, to }) => (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  [
                    'border-b-2 pb-1 font-headline text-lg font-bold transition-colors duration-200',
                    isActive ? 'border-primary text-primary' : 'border-transparent text-on-surface-variant hover:text-primary',
                  ].join(' ')
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Open account menu"
            className="rounded-full p-2 transition-colors duration-200 hover:bg-surface-container"
          >
            <span className="material-symbols-outlined text-primary">account_circle</span>
          </button>
        </div>
      </nav>
      <div className="h-px w-full bg-surface-container" />
    </header>
  )
}

export default Navbar
