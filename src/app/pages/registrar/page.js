'use client'
import { useState } from "react";
import handlerAcessUser from "./functions/handlerAcess"
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Registrar() {
  const [busca_nome, setBusca_nome] = ''
  const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    password: '',
  });

  const btnRegistrar = async (e) => {
    e.preventDefault();
    try {
      

    } catch {
        toast.error("Erro na aplicação");
    }
  }
  
  return (
    <div>
      <div class="container">
        <h1>Alterar</h1>

        <div>
             <form onSubmit={btnRegistrar}>
                <input 
                type="text" 
                placeholder="ESCREVA O NOME DO USUARIO A SE REGISTRAR" 
                class="input_text"
                onChange={(e) => { setUsuario({ ...usuario, nome: e.target.value }) }}>
                <input 
                type="email" 
                placeholder="ESCREVA O EMAIL DO USUARIO A SE REGISTRAR" 
                class="input_text"
                onChange={(e) => { setUsuario({ ...usuario, email: e.target.value }) }}>
                <input 
                type="password" 
                placeholder="ESCREVA A SENHA DO USUARIO A SE REGISTRAR" 
                class="input_text"
                onChange={(e) => { setUsuario({ ...usuario, password: e.target.value }) }}>
                
                <div class="botoes">
                     <button>ALTERAR</button>
                </div>
            </form>
            
        </div>

      <ToastContainer />
    </div>
  )
}