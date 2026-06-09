import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const mountId = window.__HYDRAFIBER_MOUNT__ || 'root'
createRoot(document.getElementById(mountId)).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
