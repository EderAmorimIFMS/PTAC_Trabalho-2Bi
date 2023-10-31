import { jwtVerify } from "jose"

const validateToken = async (token) =>{
    const secret =  ""

    try{
        const isTokenValidated =  await jwtVerify(token,
            new TextEncoder().encode(secret)
        )

        if(isTokenValidated){
                return true
        } 

    }catch{
        return token=false;

    }
}
    
export { validateToken };