import React, { useState, useContext } from 'react'


import { AuthContext } from '../../contexts/auth'

import "./styles.css"

const LoginPage = () => {
    const { authenticated, login } = useContext(AuthContext)

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault()

        console.log("submit", {user, password});
        login(user, password)
    }

    return (
        <div id="login">
            <h1 className="title">Acesso de Usuários</h1>
            <p>{String(authenticated)}</p>
            <form className="form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="user">Usuário</label>
                    <input 
                    type="user" 
                    name="user" 
                    id="user" 
                    value={user} 
                    onChange={(event) => setUser(event.target.value)} />
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