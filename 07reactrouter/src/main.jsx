import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider , createBrowserRouter
import Layout from './Layout.jsx'
import Home from './components/Home/Home/jsx'
import About from  './components/About/About.jsx'

const router = createBrowserRouter([
  {
    paths: "",
    element: <Home/>,
  },
    {
      path:"about"
      element: <About/>
    }
   ]
//}

//}

//])



/about/hitesh
Const router = createBrowserRouter(
  createRouterFormElements(
    <Route path='/' element{<Layout />}>
    <Route path='' element{<Home />}/>
      <Route path='about' element{<About />}/>
        <Route path='contact' element{<Contact />}/>
        <Route path='user/:userid' element{<User />}/>
        <Route
        loader= {githubInfoLoader}
         path='github' 
         element={<Github />} 
         />
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
