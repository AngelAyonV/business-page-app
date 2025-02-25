import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BusinessPageApp from './BusinessPageApp.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BusinessPageApp />
  </StrictMode>,
)
