"use client"

import Image from 'next/image';
import { useState, useEffect } from 'react';
import LinksAreaRestrita from '@/components/LinksAreaRestrita/LinksAreaRestrita';
import HeaderAreaRestrita from '@/components/HeaderAreaRestrita/HeaderAreaRestrita';
import './areaMetas.css';

// icone tabela
import { FaTrash } from 'react-icons/fa'

export default function AreaUsuario() {

    // NOVA META
    const [meta, setMeta] = useState({
        qtd: "",
        dt_inicio: "",
        dt_fim: "",
        id_usuario: 1
    });


    const handleChange = (e) => {
        setMeta({ ...meta, [e.target.name]: e.target.value });
    };

    // BOTAO DE SUBMISSAO
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica se todos os campos estão preenchidos
        if (!meta.qtd || !meta.dt_inicio || !meta.dt_fim) {
            alert("Preencha todos os campos antes de cadastrar.");
            return;
        }

        // Substitua a URL abaixo pela URL real da sua API de monitoramento
        fetch("http://localhost:8080/API/rest/metas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(meta)
        }).then(() => {
            alert("cadastrado com sucesso")
            window.location.reload()
        });
    };


    // TABELA
    // STATE Metas
    const [Metas, setMetas] = useState([])

    // DESCOMPACTA DA API O JSON QUE VEM DO MONITORAMENTO, DEPOIS UTILIZA O "setMonitoramentos" PARA GUARDAR OS VALORES
    useEffect(() => {
        fetch("http://localhost:8080/API/rest/metas").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setMetas(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // ARROW FUNCTION COM PARAMETRO ID PASSO PARA A API FAZER A EXCLUSAO E RETORNO UM ALERTA E RECARREGO A PAGINA
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/API/rest/metas/${id}`, {
            method: "delete"
        }).then(() => {
            alert("Deletado com sucesso!")
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            <HeaderAreaRestrita />
            <LinksAreaRestrita />
            <form className='form_area_monitoramento' onSubmit={handleSubmit} >
                <h1>Metas</h1>

                <div className="form-group">
                    <label htmlFor="number">Qual a quantidade que você pretende consumir em média diária?</label>
                    <input
                        type="number"
                        id="qtd"
                        name="qtd"
                        value={meta.qtd}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Qual data de início da meta?</label>
                    <input
                        type="date"
                        id="dt_inicio"
                        name="dt_inicio"
                        value={meta.dt_inicio}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="date">Qual data final da meta?</label>
                    <input
                        type="date"
                        id="dt_fim"
                        name="dt_fim"
                        value={meta.dt_fim}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Enviar</button>
            </form>


            <h1>Lista Metas</h1>

            <table className='table_content'>
                <thead>
                    <tr>
                        <th>Quantidade</th>
                        <th>Data Inicio</th>
                        <th>Data Fim</th>
                        <th>Id Usuario</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Metas.map((meta) => (
                        <tr key={meta.id_meta}>
                            <td>{meta.qtd}</td>
                            <td>{meta.dt_inicio}</td>
                            <td>{meta.dt_fim}</td>
                            <td>{meta.id_usuario}</td>
                            <td>
                                <button className="delete-btn" onClick={handleDelete.bind(this, meta.id_meta)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Metas do Servidor</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}