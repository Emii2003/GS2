"use client"

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import './cadastro.css';

export default function Cadastro(){

  const [usuario, setUsuario] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/API/rest/usuario").then((resp)=>{
            return resp.json();
        }).then((resp)=>{
          setUsuario(resp)
            console.log(resp)
        }).catch((error)=>{
            console.log(error)
        })
    },[])

  // const router = useRouter();
  // const { id } = router.query;

  const [novo, setNovo] = useState({
    nome: "",
    email: "",
    senha: "",
    dt_nasc: ""
  });

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/API/rest/usuario/`,{ 
      method: 'post', 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novo)
    }).then(() => {
      window.location = "/"
    });
  };

  return (
    <div className="cadastro_container">
      <div className="div_esquerda">
        <div className='textbox'>
        <p>Sua</p>
        <p>Plataforma</p>
        <p>De saúde</p>
        </div>
        
      </div>
      <div className="div_direita">
        <form className='form_cadastro' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={novo.email}
                 onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" value={novo.nome}
                 onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="nome">Senha</label>
                <input type="text" id="senha" name="senha" value={novo.senha}
                 onChange={handleChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="nome">Data de nascimento</label>
                <input type="date" id="dt_nasc" name="dt_nasc" value={novo.dt_nasc}
                 onChange={handleChange}/>
            </div>

          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
