import React, {useState} from "react";
import './index.css';
import { Button, Form, Input } from 'reactstrap';
import { api } from "../../services/api";
import { Navigate } from 'react-router-dom';
import { createBrowserHistory } from "history";
const logoImagem = require("../../assets/login.png") as string;

export default function Login(){
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const history = createBrowserHistory();

    async function login(event: { preventDefault: () => void; }) {
        event.preventDefault();
        const data = {
            email, password
        }

        try {
            const response = await api.post('api/v1/Token/LoginUser',data);
            localStorage.setItem('email', email);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('expiration', response.data.expiration);
            /*onClick() {
                redirect("/home")
            }*/
            history.push({
                    pathname: '/alunos',
                });
            window.location.href = '/alunos' ;    
            window.location.reload();
        } catch (error) {
            alert('O login falhou' + error)
        }
    }

    return(
        <div className="login-container">
            <img src={logoImagem} className="logo" alt="Login" id="img1" />
            <section className="form">
                <Form className="form" onSubmit={login}>
                    <h1>Cadastro Alunos</h1>
                    <Input type="email" size={50} placeholder="Email login" 
                        value={email} onChange={e => setEmail(e.target.value)} />

                    <Input type="password" size={20} placeholder="Password"
                        value={password} onChange={e => setPassword(e.target.value)} />

                    <Button className="button" type={"submit"} >Login</Button>
                </Form>
            </section>
        </div>
    )
}
