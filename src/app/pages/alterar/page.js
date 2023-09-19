'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Alterar() {
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    password: '',
  });
  const { push, refresh } = useRouter();

  const handlerAlterar = async (e) => {
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
        <h1>Alterar</h1>
        <div class="form">
            <form>
                <input type="text" name="nome" id="nome" placeholder="ESCREVA O NOME DE SUA PESSOA" class="input_text">
            </form>
            <div class="botoes">
                <button>BUSCAR</button>
            </div>
        </div>

        <div>
             <form>
                <input type="text" name="nome" placeholder="ESCREVA O NOME DO USUARIO A SE ALTERAR" class="input_text">
                <input type="text" name="email" id="nome" placeholder="ESCREVA O EMAIL DO USUARIO A SE ALTERAR" class="input_text">
                <input type="password" name="password" placeholder="ESCREVA A SENHA DO USUARIO A SE ALTERAR" class="input_text">
            </form>
            <div class="botoes">
                <button>ALTERAR</button>
            </div>
        </div>

      <ToastContainer />
    </div>
  )
}