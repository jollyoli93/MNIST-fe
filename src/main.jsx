import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='flex flex-row min-h-screen justify-center items-center bg-purple-300'>
      <App />
    </div>
  </StrictMode>,
)
