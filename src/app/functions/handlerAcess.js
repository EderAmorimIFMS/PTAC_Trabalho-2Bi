import Cookies from "js-cookie";
import { validateToken } from "./validateToken";
import { getUserAuthenticated } from "./handlerAcessAPI";
import { useState } from "react"

const handlerAcessUser = async (user) => {
    const [nomeAutenticado, setNomeAutenticado] = useState()
    const userAuth = await getUserAuthenticated(user);

    const isTokenValidate = validateToken(userAuth.token);

    if (isTokenValidate) {
        Cookies.set('token', userAuth.token, { expires: 1 });
        setNomeAutenticado(userAuth.nome)
        localStorage.setItem('Autenticados',JSON.stringify(nomeAutenticado))
    }

    return userAuth;
}
export default handlerAcessUser;

