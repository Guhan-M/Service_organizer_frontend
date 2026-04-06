const ApiRoutes ={

    LOGIN:{
        path:"/user/login",
        authenticate:false
    },
    USERS:{
        path:"/user",
        authenticate:false
    },
    USER_CREATE:{
        path:"/user/create",
        authenticate:false
    },
    USER_ID:{
        path:"/user/:id",
        authenticate:true
    },
    FORGET_PASS:{
        path:"/user/forget",
        authenticate:false
    },
    RESET_PASS:{
        path:"/user/resetpass",
        authenticate:true
    }

}

export default ApiRoutes