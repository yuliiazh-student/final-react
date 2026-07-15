import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './assets/scss/style.scss'
import './assets/css/icons.css'
import './assets/css/fonts.css';

import { routes } from './routes'

const router = createBrowserRouter(routes, {
  basename: '/final-react'
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
