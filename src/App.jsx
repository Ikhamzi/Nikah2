import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import HowItWorks from './pages/HowItWorks.jsx'
import Pricing from './pages/Pricing.jsx'
import Communities from './pages/Communities.jsx'
import SuccessStories from './pages/SuccessStories.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/membership" element={<Pricing />} />
      <Route path="/communities" element={<Communities />} />
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App
