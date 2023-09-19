'use server'

const users = [
    {
        name: "",
        email: "", 
        password: "",  
        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
    }
]

const getUserAuthenticated = (user) => {
    let userAuth = {};

    users.map((user_login) => {
       if(user_login.email == user.email && user_login.password == user.password){
            userAuth =  user_login;

       }
    })

    return userAuth;
}

const getUsers = () =>{
    return  users;
}

export { getUsers, getUserAuthenticated };