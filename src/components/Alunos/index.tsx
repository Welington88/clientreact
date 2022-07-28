import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import {FiXCircle} from 'react-icons/fi';
const CadastroImagem = require("../../assets/cadastro.png") as string;

export default function Alunos(){
    return(
        <div className="aluno-container">
            <header>
                <img src={CadastroImagem} className="logo" alt="Cadastro" id="img1" />
                <span>Bem-Vindo, <strong>Welington</strong>!</span>
                <Link className="button" to="aluno/novo" > Novo Aluno </Link>
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
        </div>
    )
}