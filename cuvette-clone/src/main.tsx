import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.tsx'
import './index.css'
import FulltimeJobs from './components/FulltimeJobs/FulltimeJobs.tsx'
import OtherJobs from './components/OtherJobs/OtherJobs.tsx'
import Applied from './components/Applied/Applied';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/fulltime" />} />

        <Route path="/fulltime" element={<FulltimeJobs />} />
        <Route path="/otherjobs" element={<OtherJobs />} />
        <Route path="/applied" element={<Applied />} />
      </Routes>
    </Router>
  </StrictMode>,
)
