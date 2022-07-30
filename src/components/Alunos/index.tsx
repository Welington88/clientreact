import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css';
import {FiEdit, FiUserX, FiXCircle} from 'react-icons/fi';
import { api } from "../../services/api";
import { createBrowserHistory } from "history";
const CadastroImagem = require("../../assets/cadastro.png") as string;

export interface alunos {
    id: number,
    nome: string,
    email: string,
    idade: number
}

export default function Alunos(){
    //filtrar dados state's
    const[searchInput,setSearchInput] = useState('');
    const[filtro, setFiltro] = useState([]);
    const[alunos, setAlunos] = useState([]);

    const email = localStorage.getItem("email");
    const token = localStorage.getItem("token");

    const authorization ={
        headers : {
            Authorization : `Bearer ${token}`
        }
    }

    const history = createBrowserHistory();

    const searchAlunos = (searchValue: React.SetStateAction<string>) => {
        setSearchInput(searchValue);
        if(searchInput !== '') {
            const dadosFiltrados = alunos.filter((item) =>{
                return Object.values(item).join('').toLocaleLowerCase()
                    .includes(searchInput.toLowerCase())
            });
            setFiltro(dadosFiltrados);
        } else {
            setFiltro(alunos);
        }
    }

    //hooks user effect
    useEffect(() => {
        api.get('api/Alunos', authorization).then(
            response => {setAlunos(response.data);})
    }, []);
    
    async function logout() {
        try {
            localStorage.clear();
            localStorage.setItem('token', '');
            history.push('/');
            window.location.reload();
        } catch (error) {
            alert("Não foi possível fazer o logout " + error);
        }
    }

    async function editAluno(id: number) {
        try {
            history.push(`aluno/novo/${id}`);
            window.location.reload();
        } catch (error) {
            alert('Não foi possível editar o aluno' + error);
        }
    }

    async function deleteAluno(id: number) {
        try {
            if (window.confirm(`Deseja deletar o aluno de id ${id}`)) {
                await api.delete(`api/alunos/${id}`, authorization);
                setAlunos(alunos.filter(aluno => aluno['id'] !== id))
            }
        } catch (error) {
            alert("Não foi possível excluir o Aluno" + error)
        }
    }

    return(
        <div className="aluno-container">
            <header>
                <img src={CadastroImagem} className="logo" alt="Cadastro" id="img1" /><br/>
                <span>Bem-Vindo, <strong>{email}</strong>!</span><br/>
                <Link className="button texto" to="aluno/novo/0" > Novo Aluno </Link> {" "}
                <button onClick={logout} type="button">
                    <FiXCircle size={35} color="#17202a" />
                </button>
            </header>
            <form>
                <input type={"text"} placeholder="Filtrar por nome... " 
                    onChange={(e) => searchAlunos(e.target.value)} /> {" "}
            </form>
            <h1>Relação de Alunos</h1>
            {searchInput.length > 1  ? ( //operador ternario
                <ul>
                {filtro.map(aluno=>(   
                    <li className="lista" key={aluno['id']}>
                        <b>Nome:</b>{aluno['nome']}<br/><br/>
                        <b>Email:</b>{aluno['email']}<br/><br/>
                        <b>Idade:</b>{aluno['idade']}<br/><br/>
                        
                        <button onClick={() => editAluno(aluno['id'])} type="button">
                            <FiEdit size={25} color="#17202a" />
                        </button>
                        <button onClick={() => deleteAluno(aluno['id'])} type="button"> 
                            <FiUserX size={25} color="#17202a" />
                        </button>
                    </li>
                ))}
            </ul>
            ) : ( 
                <ul>
                    {alunos.map(aluno=>(   
                        <li className="lista" key={aluno['id']}>
                            <b>Nome:</b>{aluno['nome']}<br/><br/>
                            <b>Email:</b>{aluno['email']}<br/><br/>
                            <b>Idade:</b>{aluno['idade']}<br/><br/>
                            
                            <button onClick={() => editAluno(aluno['id'])} type="button">
                                <FiEdit size={25} color="#17202a" />
                            </button>
                            <button onClick={() => deleteAluno(aluno['id'])} type="button">
                                <FiUserX size={25} color="#17202a" />
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}