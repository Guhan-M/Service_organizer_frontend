import Login from "../components/Authenticate/Login";
import Dashboard from "../components/Dashboard";
import { Navigate } from "react-router-dom";
import AllServicesPage from "../components/Allservicespage"
import CartPage from "../components/CartPage";
import TechnicianPortal from "../components/Partners/TechnicianPortal";
import Signup from '../components/Authenticate/Signup'
import ForgetPass from '../components/Authenticate/ForgetPass'
import ResetPass from '../components/Authenticate/ResetPass'

const AppRoutes =[
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/signup",
        element:<Signup/>
    },
    {
        path:"/forgetPassword",
        element:<ForgetPass/>
    },
    {
        path:"/resetPassword/:token",
        element:<ResetPass/>
    },
    {
        path:"/dashboard",
        element:<Dashboard/>
    },
    {
        path:"/allservices",
        element:<AllServicesPage/>
    },
    {
        path:"/cart",
        element:<CartPage/>
    },
    {
        path:"/technicianDashboard",
        element:<TechnicianPortal/>
    },
    {
        path:"*",
        element:<Navigate to="/dashboard"/>
    }

]


export default AppRoutes