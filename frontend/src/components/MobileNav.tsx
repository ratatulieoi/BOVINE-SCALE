import { NavLink } from 'react-router-dom'

type MobileNavProps = {
  variant?: 'hero' | 'default'
}

function MobileNav({ variant = 'default' }: MobileNavProps) {
  if (variant === 'hero') {
    return (
      <div className="fixed bottom-8 left-1/2 z-50 -translate-x-1/2 md:hidden">
        <div className="flex gap-8 rounded-full border border-white/20 bg-black/30 px-6 py-3 backdrop-blur-xl">
          <NavLink to="/" className="text-white">
            <span className="material-symbols-outlined">home</span>
          </NavLink>
          <NavLink to="/history" className="text-white/60">
            <span className="material-symbols-outlined">history</span>
          </NavLink>
          <NavLink to="/upload" className="text-white/60">
            <span className="material-symbols-outlined">upload</span>
          </NavLink>
        </div>
      </div>
    )
  }

  const items = [
    { label: 'Upload', icon: 'upload', to: '/upload' },
    { label: 'History', icon: 'history', to: '/history' },
  ]

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 flex justify-around border-t border-outline-variant/15 bg-surface px-6 py-4 md:hidden">
      {items.map(({ label, icon, to }) => (
        <NavLink
          key={label}
          to={to}
          className={({ isActive }) =>
            [
              'flex flex-col items-center gap-1 text-[10px] font-bold uppercase tracking-tight',
              isActive ? 'text-primary' : 'text-on-surface-variant opacity-60',
            ].join(' ')
          }
        >
          <span className="material-symbols-outlined">{icon}</span>
          <span>{label}</span>
        </NavLink>
      ))}
    </nav>
  )
}

export default MobileNav
