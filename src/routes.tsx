import React from "react";
import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Login from "./components/Login";
import Alunos from "./components/Alunos";

export default function Rotas() {

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/alunos" element={ <Alunos /> } />
            </Routes>
        </BrowserRouter>
    )

}

