import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Blogs from './Pages/Blogs.jsx'
import BookMarks from './Pages/BookMarks.jsx'
import MainlayOut from './layOut/MainlayOut.jsx'
import Blog from './Pages/Blog.jsx'
import Contact from './Components/Contact.jsx'
import Author from './Components/Author.jsx'


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
            element:<Blogs/>,
            loader:()=>fetch('https://dev.to/api/articles?per_page=20&top=7')
          },
          {
             path:'/blog/:id',
             element:<Blog/>,
             loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
             children:[
                   {
                    index:true,
                    element:<Contact/>,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                   },
                   {
                    path:'author',
                    element:<Author/>,
                    loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
                   }
                 ]
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