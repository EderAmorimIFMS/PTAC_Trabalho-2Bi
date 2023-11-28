'use server'

const url = "https://ptac-back-end-vercel.vercel.app/"

const getUserAuthenticated = async (user) => {
    const responseOfApi = await fetch(`${url}/user/authenticated`, {
            method: "POST",
            headers: {"content-type":"aplication/json"},
            body: JSON.stringify(user)
        }
    );
    let userAuth = await responseOfApi.json();
    return userAuth;
    
}

const getUsers = async () =>{
    try{
        const responseOfApi = await fetch(`${url}/users`, {
            cache: "no-cache"
        });
        let users = await responseOfApi.json();
        return users
    }catch{
        return null
    }
}

const postUser = async (user) => {
    try {
        const responseOfApi = await fetch(`${url}/user`, {
            method: "POST",
            headers: {"content-type":"aplication/json"},
            body: JSON.stringify(user)
         });
        const userCreated = await responseOfApi.json();
        return userCreated
    } catch {
        return null
    }
}

const putUser = async (user, id) =>{
    try{
        const responseOfApi = await fetch(`${url}/user/${id}`, {
            method: 'PUT',
            headers: {"content-type":"aplication/json"},
            body: JSON.stringify(user)
        });
        const userUpdate = await responseOfApi.json()
        return userUpdate
    }
    catch{
        return null
    }
}

export { getUsers, getUserAuthenticated, postUser, putUser };