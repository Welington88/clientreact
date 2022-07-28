import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import {FiEdit, FiUserX, FiXCircle} from 'react-icons/fi';
const CadastroImagem = require("../../assets/cadastro.png") as string;

export default function Alunos(){
    return(
        <div className="aluno-container">
            <header>
                <img src={CadastroImagem} className="logo" alt="Cadastro" id="img1" /><br/>
                <span>Bem-Vindo, <strong>Welington</strong>!</span><br/>
                <Link className="button texto" to="aluno/novo/0" > Novo Aluno </Link> {" "}
                <button type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type={"text"} placeholder="Nome" />
                <button type="button" className="button">
                    Filtrar aluno por nome (parcial)
                </button>
            </form>
            <h1>Relação de Alunos</h1>
            <ul>
                <li>
                    <b>Nome:</b>Paulo<br/><br/>
                    <b>Email:</b>paulo@email.com.br<br/><br/>
                    <b>Idade:</b>22<br/><br/>
                    <button type="button">
                        <FiEdit size={25} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" />
                    </button>
                    
                </li>

                <li>
                    <b>Nome:</b>Paulo<br/><br/>
                    <b>Email:</b>paulo@email.com.br<br/><br/>
                    <b>Idade:</b>22<br/><br/>
                    <button type="button">
                        <FiEdit size={25} color="#17202a" />
                    </button>
                    <button type="button">
                        <FiUserX size={25} color="#17202a" />
                    </button>
                    
                </li>
            </ul>
        </div>
    )
}