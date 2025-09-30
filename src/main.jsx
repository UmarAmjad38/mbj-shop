import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './ui/App'

const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


