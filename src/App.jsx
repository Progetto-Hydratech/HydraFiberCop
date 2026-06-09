import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ComparisonSection from './components/ComparisonSection'
import OperatorTabs from './components/OperatorTabs'
import PhotoGallery from './components/PhotoGallery'
import Footer from './components/Footer'

const isEmbedded = !!window.__HYDRAFIBER_MOUNT__

export default function App() {
  return (
    <>
      {!isEmbedded && <Navbar />}
      <Hero />
      <div className="divider" />
      <ComparisonSection />
      <div className="divider" />
      <OperatorTabs />
      <div className="divider" />
      <PhotoGallery />
      <Footer />
    </>
  )
}
