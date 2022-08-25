import React, { useState, useContext } from 'react'


import { AuthContext } from '../../contexts/auth'

import "./styles.css"

const LoginPage = () => {
    const { authenticated, acesso } = useContext(AuthContext)

    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("submit", {login, password});
        acesso(login, password)
    }

    return (
        <div id="acesso">
            <h1 id="title">PET SHOP APP</h1>
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Acesso de Usuários</h1>
                <div className="field">
                    <label htmlFor="login">Usuário</label>
                    <input 
                    type="login" 
                    name="login" 
                    id="login" 
                    value={login} 
                    onChange={(event) => setLogin(event.target.value)} />
                </div>
                <div className="field">
                    <label htmlFor="password">Senha</label>
                    <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div className="actions">
                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
            
    )
}

export default LoginPage;