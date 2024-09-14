import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar/Navbar.tsx'
import './index.css'
import FulltimeJobs from './components/FulltimeJobs/FulltimeJobs.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <FulltimeJobs />
  </StrictMode>,
)
