import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import HeroPage from './pages/HeroPage'
import HistoryDetailPage from './pages/HistoryDetailPage'
import HistoryPage from './pages/HistoryPage'
import ProcessingPage from './pages/ProcessingPage'
import ResultPage from './pages/ResultPage'
import UploadPage from './pages/UploadPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/processing" element={<ProcessingPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/history/:id" element={<HistoryDetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
