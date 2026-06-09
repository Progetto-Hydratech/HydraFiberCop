import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhoIsFiberCop from './components/WhoIsFiberCop'
import Timeline from './components/Timeline'
import NetworkDiagram from './components/NetworkDiagram'
import GponSection from './components/GponSection'
import CoverageSection from './components/CoverageSection'
import ComparisonSection from './components/ComparisonSection'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="divider" />
      <WhoIsFiberCop />
      <div className="divider" />
      <Timeline />
      <div className="divider" />
      <NetworkDiagram />
      <div className="divider" />
      <GponSection />
      <div className="divider" />
      <CoverageSection />
      <div className="divider" />
      <ComparisonSection />
      <div className="divider" />
      <PhotoGallery />
      <Footer />
    </>
  )
}
