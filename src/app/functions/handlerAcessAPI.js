'use server'

const url = "https://ptac-back-end-vercel.vercel.app/"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(`${url}/user/authenticated`,
        {
            method: "POST",
            headers: {"content-type":"aplication/json"},
            body: JSON.stringify(user)
        }
    );
    let userAutenthicated = await responseOfApi.json();
    return userAutenthicated;
    
}

const getUsers = async () =>{
    const req = await  fetch(`${url}/users`,{
        cache: "no-cache"
    });
    
    const users = await req.json();
    return users 
}

export { getUsers, getUserAuthenticated };