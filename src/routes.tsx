import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Login from "./components/Login";
import Alunos from "./components/Alunos";
import NovoAluno from "./components/NovoAluno";

export default function Rotas() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/alunos" element={ <Alunos /> } />
                <Route path="/aluno/novo/:alunoId" element={ <NovoAluno /> } />
                <Route path="alunos/aluno/novo/:alunoId" element={ <NovoAluno /> } />
            </Routes>
        </BrowserRouter>
    )

}