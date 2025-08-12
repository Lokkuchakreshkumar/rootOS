import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Start from "./assets/components/Start.jsx"
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import Lock from './assets/components/Lock.jsx'
import { createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path:'/',
    element:<App />
  },
  {
    path:'/lock',
    element:<Lock/>
  },{
    path:'/start',
    element:<Start/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
