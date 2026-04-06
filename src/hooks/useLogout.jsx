import { useNavigate } from "react-router-dom";

function useLogout(){
    let navigate=useNavigate()
    return()=>{
        console.log("logout trigger")
        sessionStorage.clear()
        navigate('/login')
    }
    
}
export default useLogout