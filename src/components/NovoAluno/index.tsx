import React, { useEffect, useState } from "react";
import { FiCornerDownLeft, FiUserPlus } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import './index.css';
import { api } from "../../services/api";

export default function NovoAluno(){
    const [id, setId] = useState(null);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [idade, setIdade] = useState(0);
    //hooks react
    const {alunoId} = useParams(); 
    const history = createBrowserHistory();
    
    const token = localStorage.getItem("token");
    const authorization ={
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    //hooks user effect
    async function loadAluno() {
        try {
            const response = await api.get(`api/Alunos/${alunoId}`,authorization);

            setId(response.data.id);
            setNome(response.data.nome);
            setEmail(response.data.email);
            setIdade(response.data.idade);
        } catch (error) {
            alert("Não foi possível carregar o aluno " + error);
        }    
    }

    //hooks user effect
    useEffect(() => {
        if (alunoId === '0')
            return;
        else
            loadAluno();
    }, [alunoId]);

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
                        <input placeholder="Nome: " value={nome} onChange={e => setNome(e.target.value)} />
                        <input placeholder="Email: " value={email} onChange={e => setEmail(e.target.value)} />
                        <input placeholder="Idade: " value={idade} onChange={e => setIdade(Number.parseInt(e.target.value))}/>
                        <button className="button" type={"submit"} >
                            {alunoId === '0' ? 'Incluir' : 'Atualizar'  }
                        </button>
                    </form>
                </section>
            </div>
        </div>
    )
}