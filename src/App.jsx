import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes'
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter(AppRoutes)
  return <>
  <Toaster/>
  <RouterProvider router={router} />
  </>
}

export default App



// import AppRoutes from './utils/AppRoutes'


// import Dashboard from './components/Dashboard'
// import Login from './components/Authenticate/Login'
// import Signup from './components/Authenticate/Signup'
// import ForgetPassword from './components/Authenticate/ForgetPass'
// import AllServicesPage from './components/Allservicespage'


  {/* <AllServicesPage/> */}


{/* Authenticate -- */}
  {/* <Login/>   */}
  {/* <Signup/> */}
  {/* <ForgetPassword/> */}


{/* Testing -- */}
  {/* <h2>Hello user</h2> */}