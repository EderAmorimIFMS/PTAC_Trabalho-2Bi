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

const btnBuscar = async (e) => {
    e.preventDefault();
    try {
        

    } catch {
        toast.error("Erro na busca!");
    }
  }

  const btnAlterar = async (e) => {
    e.preventDefault();
    try {
      const userAuth = await handlerAcessUser(user);
      if(userAuth.token == undefined){
        toast.error("Erro no email ou senha!");
      }

    } catch {
        toast.error("Erro na aplicação");
    }
  }
  
return (
  <div class="container">
    <h1>Alterar</h1>
        
    <div>
      <form onSubmit={btnBuscar}>
        <input
          type="text"
          name="busca_nome"
          placeholder="ESCREVA O NOME DO USUARIO QUE DESEJA ALTERAR" 
          class="input_text"
          onChange={(e) => { setBuscanome(e.target.value)}}
        />
                
        <div class="botoes">
          <button>BUSCAR</button>
        </div>
      </form>
    </div>

    <div>
      <form onSubmit={btnAlterar}>
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