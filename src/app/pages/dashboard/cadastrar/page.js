'use client'
import { useState } from "react";
//import handlerAcessUser from "./functions/handlerAcess"
import { postUser } from "@app/functions/handlerAcessAPI"
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Cadastrar() {
  const [user, setUser] = useState({
    nome: '',
    email: '',
    password: '',
  });

const { push } = useRouter()

const handlerSubimit = async(event) =>{
  event.preventDefault();
  try{
    await postUser(user);
    await new Promisse((resolve) => {
      toast.success("Usuário cadastrado com sucesso!");
      setTimeout(resolve, 5000 );
    })
    return push("/pages/dashboard");
  } catch{
    return toast.error("Erro");
  }
}

return (
  <div class="container">
    <h1>Cadastar</h1>

    <div>
      <form onSubmit={handlerSubimit}>
        <input 
          type="text" 
          placeholder="ESCREVA O NOME DO USUARIO A SE REGISTRAR" 
          class="input_text"
          onChange={(event) => { setUsuario({ ...usuario, nome: event.target.value }) }}
        />
        <input 
          type="email" 
          placeholder="ESCREVA O EMAIL DO USUARIO A SE REGISTRAR" 
          class="input_text"
          onChange={(event) => { setUsuario({ ...usuario, email: event.target.value }) }}
        />
        <input 
          type="password" 
          placeholder="ESCREVA A SENHA DO USUARIO A SE REGISTRAR" 
          class="input_text"
          onChange={(event) => { setUsuario({ ...usuario, password: event.target.value }) }}
        />
                
        <div class="botoes">
          <button>ALTERAR</button>
        </div>
      </form>
    </div>

    <ToastContainer />
  </div>
)}
