import { Route, Routes } from 'react-router-dom'
import { NavBar } from '@/components/NavBar'
import Home from '@/pages/Home'
import Profile from '@/pages/Profile'
import SportsCV from '@/pages/SportsCV'
import ProfessionalCV from '@/pages/ProfessionalCV'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sports-cv" element={<SportsCV />} />
        <Route path="/professional-cv" element={<ProfessionalCV />} />
      </Routes>
    </>
  )
}

export default App
