import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CountdownLightSwitch from './CountdownLightSwitch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < CountdownLightSwitch/>
  </StrictMode>,
)
