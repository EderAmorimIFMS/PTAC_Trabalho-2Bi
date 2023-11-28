'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { putUser } from "@/app/functions/handlerAcessAPI";


export default function Alterar({ params }) {
const [usuario, setUsuario] = useState({
    nome: '',
    email: '',
    password: '',
  });

  const { push } = useRouter();

const handlerSubmit = async (event) => {
  event.preventDefault();
  try {
    await putUser(usuario, params.id);
    return push("pages/dashboard");
    toast.success("Alterado com sucesso");S
  } catch {
    toast.error("Erro ao alterar");
  }
}
  
return (
<div class="container">
  <h1>Alterar</h1>
  <div>
    <form onSubmit={handlerSubmit}>
      <input 
        type="text" 
        placeholder="ESCREVA O NOME DO USUARIO A SE ALTERAR" 
        class="input_text"
        onChange={(e) => { setUsuario({ ...usuario, nome: e.target.value }) }}
      />
      <input 
        type="email" 
        placeholder="ESCREVA O EMAIL DO USUARIO A SE ALTERAR" 
        class="input_text"
        onChange={(e) => { setUsuario({ ...usuario, email: e.target.value }) }}
      />
      <input 
        type="password" 
        placeholder="ESCREVA A SENHA DO USUARIO A SE ALTERAR" 
        class="input_text"
        onChange={(e) => { setUsuario({ ...usuario, password: e.target.value }) }}
      />
              
      <div class="botoes">
        <button>ALTERAR</button>
      </div>
    </form>
  </div>

  <ToastContainer />
</div>
)}