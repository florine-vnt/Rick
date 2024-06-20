import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { ThemeProvider } from './components/contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)