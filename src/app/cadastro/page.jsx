"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import TextBox from "@/components/TextBoxForm/Textbox";
import styles from './cadastro.module.css';

export default function Cadastro() {

  const [usuario, setUsuario] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/API/rest/usuario").then((resp) => {
      return resp.json();
    }).then((resp) => {
      setUsuario(resp)
      console.log(resp)
    }).catch((error) => {
      console.log(error)
    })
  }, [])

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

    fetch(`http://localhost:8080/API/rest/usuario/`, {
      method: 'post',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novo)
    }).then(() => {
      window.location = "/login"
    });
  };

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.divEsquerda}>
        <div className={styles.textbox}>
          <p>Sua</p>
          <p>Plataforma</p>
          <p>De saúde</p>
        </div>
      </div>
      <div className={styles.divDireita}>
        <div className={styles.buttonSection}>
          <Link className={styles.homeCadastro} href={'/'}>Home</Link>
          <Link className={styles.loginCadastro} href={'/login'}>Login</Link>
        </div>
        <form className={styles.formCadastro} onSubmit={handleSubmit}>
          <TextBox />
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={novo.email} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" value={novo.nome} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Senha</label>
            <input type="password" id="senha" name="senha" value={novo.senha} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="nome">Data de nascimento</label>
            <input type="date" id="dt_nasc" name="dt_nasc" value={novo.dt_nasc} onChange={handleChange} />
          </div>
          <button className={styles.buttonForm} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
