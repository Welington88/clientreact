import React from "react";
import './index.css';
import { Button, Form, Input } from 'reactstrap';
const logoImagem = require("../../assets/login.png") as string;

export default function Login(){
    
    return(
        <div className="login-container">
            <img src={logoImagem} className="logo" alt="Login" id="img1" />
            <section className="form">
                <Form className="form">
                    <h1>Cadastro Alunos</h1>
                    <Input type="email" size={50} placeholder="Email login" />
                    <Input type="password" size={20} placeholder="Password" />
                    <Button className="button" type={"submit"} >Login</Button>
                </Form>
            </section>
        </div>
    )
}
