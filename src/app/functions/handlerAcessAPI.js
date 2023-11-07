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
    try{
        const responseOfApi = await fetch(`${url}/users`, {
            next:{revalidate: 10}
        })
        let userAutenthicated = await responseOfApi.json();
        return userAutenthicated
     
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

    const userSave = await responseOfApi.json();
    return userSave

    } catch {
        return null
    }
  }
export { getUsers, getUserAuthenticated, postUser };