import Footer from '../components/Footer'
import MobileNav from '../components/MobileNav'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const mockHistory = [
  {
    id: '1',
    date: '2026-04-04',
    time: '14:32',
    estimatedWeight: 342,
    unit: 'kg',
    breed: 'Holstein',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhdUvKTDIddXwoQFeBoJNI6rxgVr5f-qfKm8-2Nuv1hAJi04Ye1LIBgUWwKXlDBcUROZgn-mwjP2cRVSiKt05W_V6aQWhOGBcHJCryGZ0noVK5FAMs51FZ67yXVhRHVqHA8AEYU40mYPeTG8zmfKdGnfTD7LROcZJg4H8fR-UuxXBk7tZzb6z18deDL5e7eZ5Q22lNgQc1dVyuYOOf2P2EzYxzMIlQUTb-8SDz1ojBGhGe71psbOvpclXIO2QRhavaLw-1SQk9Msk',
    status: 'success',
  },
  {
    id: '2',
    date: '2026-04-03',
    time: '09:15',
    estimatedWeight: 287,
    unit: 'kg',
    breed: 'Jersey',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG8WW-1iujMT7s6GW4wYneoqvcx9TdQkiBPZgVSV-7D7MhXa5D6qnHcDuHbP4tURFb0mmlYP2SL0vmWUqyN0CRLwQYXXrWNXRoyWmsW_C43THLx-zJ70txkwcup5YJ3xVuSAuGzCO_Ltlskk2Wrp5aO9IvKVi4-b6KZCQ1GRodas6vAyxNRsIb1kGodmPXfnMtNooCjpwZRBanVMOyo_FoA1xYU6rqVEell0B-HevaT3kX7fbE7GgSVmKpVd2ER_hFTqOzkOZrNdk',
    status: 'success',
  },
  {
    id: '3',
    date: '2026-04-02',
    time: '16:48',
    estimatedWeight: null,
    unit: 'kg',
    breed: 'Unknown',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOZiUw8b8UfcREmJWP55g5-pXDlTYGpuZHnXarAmHOXMu_GWiA9HCF-86MvFqeguwf6MO5xNU0Fqg6e8kCiuZPRnaeQLTnMcIr18vbHTLxjptZPNX5Ghw9toxvQX4pVwHwDe47tc4CgWFJEUVvZJC3hBSgALxftOEQeo4S4_p6a3votXa5k4uNmDI2-L2eWy6yz-MkbzE699IGCovfs_R1W2-9YiNq4cXtP-Ds-bo8vm0DIBXoIrUD_jhCsxf7vnIDjU9nawXzzlk',
    status: 'failed',
  },
  {
    id: '4',
    date: '2026-04-01',
    time: '11:20',
    estimatedWeight: 415,
    unit: 'kg',
    breed: 'Angus',
    thumbnail: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhdUvKTDIddXwoQFeBoJNI6rxgVr5f-qfKm8-2Nuv1hAJi04Ye1LIBgUWwKXlDBcUROZgn-mwjP2cRVSiKt05W_V6aQWhOGBcHJCryGZ0noVK5FAMs51FZ67yXVhRHVqHA8AEYU40mYPeTG8zmfKdGnfTD7LROcZJg4H8fR-UuxXBk7tZzb6z18deDL5e7eZ5Q22lNgQc1dVyuYOOf2P2EzYxzMIlQUTb-8SDz1ojBGhGe71psbOvpclXIO2QRhavaLw-1SQk9Msk',
    status: 'success',
  },
]

function HistoryPage() {
  return (
    <div className="page-shell mobile-safe-space">
      <Navbar />

      <main className="content-shell px-6 py-12 md:py-20">
        <div className="mb-12">
          <h1 className="font-headline text-4xl leading-tight font-extrabold tracking-tight text-on-surface md:text-5xl">
            Estimation History
          </h1>
          <p className="mt-3 text-lg text-on-surface-variant">
            Tap any card to view the full breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mockHistory.map((entry) => (
            <Link
              key={entry.id}
              to={entry.status === 'success' ? `/history/${entry.id}` : `/error`}
              className="group overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-container-highest">
                <img
                  src={entry.thumbnail}
                  alt={`Bovine estimate from ${entry.date}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3">
                  {entry.status === 'success' ? (
                    <span className="rounded-full bg-primary/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      {entry.estimatedWeight} {entry.unit}
                    </span>
                  ) : (
                    <span className="rounded-full bg-error/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                      Failed
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-headline font-bold text-on-surface">{entry.breed}</p>
                    <p className="text-xs text-on-surface-variant">
                      {entry.date} · {entry.time}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-on-surface-variant opacity-40 transition-transform duration-300 group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {mockHistory.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <span className="material-symbols-outlined mb-4 text-6xl text-outline">history</span>
            <h3 className="mb-2 font-headline text-xl font-bold text-on-surface">No estimates yet</h3>
            <p className="mb-6 text-on-surface-variant">Upload a photo to get started.</p>
            <Link
              to="/upload"
              className="rounded-full bg-primary px-8 py-3 font-semibold text-on-primary shadow-lg transition-all hover:opacity-90 active:scale-95"
            >
              Start Estimating
            </Link>
          </div>
        )}
      </main>

      <Footer />
      <MobileNav />
    </div>
  )
}

export default HistoryPage
