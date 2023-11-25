"use client"

import styles from './login.module.css';
import { useState, useEffect } from "react";
import Link from 'next/link';
import TextBox from '@/components/TextBoxForm/Textbox';

export default function Login() {
  const [usuarios, setUsuarios] = useState([]);
  const [novo, setNovo] = useState({
    nome: "",
    email: "",
    senha: "",
    dt_nasc: ""
  });

  useEffect(() => {
    fetch("http://localhost:8080/API/rest/usuario")
      .then((resp) => resp.json())
      .then((resp) => {
        setUsuarios(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setNovo({ ...novo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioExistente = usuarios.find((user) => user.email === novo.email && user.senha === novo.senha);

    if (usuarioExistente) {
      alert("Usuário logado com sucesso.");
      // Armazenar DADOS DO USUARIO
      sessionStorage.setItem('id', usuarioExistente.id_usuario);
      sessionStorage.setItem('nome', usuarioExistente.nome);

      //  localStorage.setItem('id_user', usuarioExistente.id_usuario );
      //  localStorage.setItem('nome', usuarioExistente.nome );
      window.location.href = "/areaRestrita";
    } else {
      // Se o usuário não existe
      alert("Dados inválidos")
    }
  };

  return (

    <div className={styles.loginContainer}>
      <div className={styles.divEsquerda}>
        <div className={styles.textbox}>
          <p>Sua</p>
          <p>Plataforma</p>
          <p>De saúde</p>
        </div>
      </div>
      <div className={styles.divDireita}>
        <div className={styles.buttonSection}>
          <Link className={styles.homeLogin} href={'/'}>
            Home
          </Link>
          <Link className={styles.cadastroLogin} href={'/cadastro'}>
            Cadastro
          </Link>
        </div>
        <TextBox/>
        <form className={styles.formLogin} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={novo.email}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="senha" className={styles.formLabel}>Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={novo.senha}
              onChange={handleChange}
              className={styles.formInput}
            />
          </div>

          <button className={styles.buttonForm} type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};
