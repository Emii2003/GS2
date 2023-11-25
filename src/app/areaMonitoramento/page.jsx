"use client"

import Image from 'next/image';
import { useState, useEffect } from "react";
import Link from 'next/link';
import './areaMonitoramento.css';
import LinksAreaRestrita from '@/components/LinksAreaRestrita/LinksAreaRestrita';
import HeaderAreaRestrita from '@/components/HeaderAreaRestrita/HeaderAreaRestrita';

// icone tabela
import { FaTrash } from 'react-icons/fa'

export default function AreaUsuario() {

    // DADOS DO USUARIO
    const id_user = sessionStorage.getItem('id')
    const nome = sessionStorage.getItem('nome')

    // TRAZER DADOS DE DEPENDENCIA QUIMICA
    const [Dependencia, setDependencia] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/API/rest/dependencia").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setDependencia(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // NOVO MONITORAMENTO
    const [monitoramento, setMonitoramento] = useState({
        qtd_consumo_diario: "",
        tempo_consumo: "Alguns dias",
        id_usuario: id_user ,
        id_dependencia_quimica: 1,
    });

    const handleChange = (e) => {
        setMonitoramento({ ...monitoramento, [e.target.name]: e.target.value });
    };


    // BOTAO DE SUBMISSAO
    const handleSubmit = (e) => {
        e.preventDefault();

         // Verifica se todos os campos estão preenchidos
        if (!monitoramento.qtd_consumo_diario || !monitoramento.tempo_consumo || !monitoramento.id_dependencia_quimica) {
            alert("Preencha todos os campos antes de cadastrar.");
            return;
        }

        // Substitua a URL abaixo pela URL real da sua API de monitoramento
        fetch("http://localhost:8080/API/rest/monitoramento", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(monitoramento)
        }).then(() => {
            alert("cadastrado com sucesso")
            window.location.reload()
        });
    };

    // STATE MONITORAMENTO
    const [Monitoramentos, setMonitoramentos] = useState([])

    // DESCOMPACTA DA API O JSON QUE VEM DO MONITORAMENTO, DEPOIS UTILIZA O "setMonitoramentos" PARA GUARDAR OS VALORES
    useEffect(() => {
        fetch(`http://localhost:8080/API/rest/monitoramento/`).then((resp) => {
            return resp.json();
        }).then((resp) => {
            setMonitoramentos(resp)
            console.log(resp)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // ARROW FUNCTION COM PARAMETRO ID PASSO PARA A API FAZER A EXCLUSAO E RETORNO UM ALERTA E RECARREGO A PAGINA
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/API/rest/monitoramento/${id}`, {
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
            <form className='form_area_monitoramento' onSubmit={handleSubmit}>
                <h1>Monitoramento</h1>

                <div className="form-group">
                    <label htmlFor="quantidadeConsumo">Quantidade de Consumo Diário</label>
                    <input
                        type="number"
                        id="qtd_consumo_diario"
                        name="qtd_consumo_diario"
                        value={monitoramento.qtd_consumo_diario}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="tipoSubstancia">Tipo de Substância</label>
                    <select id="id_dependencia_quimica" name="id_dependencia_quimica" required onChange={handleChange}
                        value={monitoramento.id_dependencia_quimica}>
                        {Dependencia.map((dep) => (
                            <option value={dep.id_dependencia_quimica} key={dep.id_dependencia_quimica}>{dep.descricao}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Há quanto tempo você consome</label>
                    <select id="tempo_consumo" name="tempo_consumo" required onChange={handleChange}
                        value={monitoramento.tempo_consumo}>
                        <option value="Alguns dias">Há algumas semanas ou dias</option>
                        <option value="Menos de 1 ano">Menos de 12 meses</option>
                        <option value="Cerca de 1 ano">Cerca de 1 ano</option>
                        <option value="Mais de 1 ano">Mais de um ano</option>
                        <option value="5 anos">Aproximadamente 5 anos</option>
                    </select>
                </div>

                <button type="submit">Enviar</button>
            </form>

            <h1>Lista Monitoramento</h1>

            <table className='table_content'>
                <thead>
                    <tr>
                        <th>Consumo Diario</th>
                        <th>Tempo Consumo</th>
                        <th>ID Usuário</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Monitoramentos.map((mon) => (
                        <tr key={mon.id_monitoramento}>
                            <td>{mon.qtd_consumo_diario}</td>
                            <td>{mon.tempo_consumo}</td>
                            <td>{nome}</td>
                            <td>
                                <button className="delete-btn" onClick={handleDelete.bind(this, mon.id_monitoramento)}>
                                    <FaTrash />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="4">Monitoramento do Servidor</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}