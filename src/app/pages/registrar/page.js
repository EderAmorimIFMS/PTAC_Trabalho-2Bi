'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Registrar() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerRegistrar = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token == undefined){
        toast.error("Erro no email ou senha!");
      }
      push('/pages/dashboard');

    } catch {
        toast.error("Erro na aplicação");
    }
  }
  return (
    <div>
      <div class="container">
        <h1>Registrar</h1>

        <div>
             <form>
                <input type="text" name="nome" placeholder="ESCREVA O NOME DO USUARIO A SE REGISTRAR" class="input_text">
                <input type="text" name="email" placeholder="ESCREVA O EMAIL DO USUARIO A SE REGISTRAR" class="input_text">
                <input type="password" name="password" placeholder="ESCREVA A SENHA DO USUARIO A SE REGISTRAR" class="input_text">
            </form>
            <div class="botoes">
                <button>REGISTRAR</button>
            </div>
        </div>

      <ToastContainer />
    </div>
  )
}