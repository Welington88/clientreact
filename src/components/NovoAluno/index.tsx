import React from "react";
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import './index.css';

export default function NovoAluno(){
    //hooks react
    const {alunoId} = useParams(); 
    return(
        <div className="novo-aluno-container">
            <div className="content">
                <section className="form">
                    <FiUserPlus size={105} color="#FFF" />
                    <h1> {alunoId === '0' ? 'Incluir Novo Aluno' : 'Atualizar Aluno'  } </h1>
                    <Link className="back-link texto" to={"/alunos"} >
                        <FiCornerDownLeft size={25} color="#FFF" /> Retornar
                    </Link>
                    <form>
                        <input placeholder="Nome: " />
                        <input placeholder="Email: " />
                        <input placeholder="Idade: " />
                        <button className="button" type={"submit"} >
                            {alunoId === '0' ? 'Incluir' : 'Atualizar'  }
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}