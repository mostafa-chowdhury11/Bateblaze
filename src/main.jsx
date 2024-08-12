import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import BookMarks from './Pages/BookMarks.jsx'
import MainlayOut from './layOut/MainlayOut.jsx'


const router=createBrowserRouter([
      {
        path:'/',
        element:<MainlayOut/>,
        children:[
          {
            path:'/',
            element:<Home/>
          },
          {
            path:'/blogs',
            element:<Blogs/>
          },
          {
            path:'/bookmarks',
            element:<BookMarks/>
          }
        ]
      }
])

createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  
  </>
);