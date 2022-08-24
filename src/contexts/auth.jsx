import React, { useState,useEffect, createContext} from "react";

import { useNavigate } from "react-router-dom";

import { api, createSession } from "../services/api"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token) {
            api.defaults.headers.Authorization = `token ${token}`
        }

        setLoading(false)
    }, [])

    const acesso = async (login, password) => {

        const response = await createSession(login, password)

        console.log("login", response.data)

        const token = response.data.token
        

        
        localStorage.setItem("token", token)

        api.defaults.headers.Authorization = `token ${token}`

            setUsers(token);
            navigate("/")
    }
    const logout = () => {
        console.log('logout')
        localStorage.removeItem("users")
        localStorage.removeItem("token")
        api.defaults.headers.Authorization = null
        setUsers(null)
        navigate("/login")
    }

    return(
        <AuthContext.Provider value={{authenticated: !!users, users, loading, acesso, logout}}>
            {children}
        </AuthContext.Provider>
    )
}