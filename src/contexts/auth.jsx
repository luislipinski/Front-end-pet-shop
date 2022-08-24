import React, { useState,useEffect, createContext} from "react";

import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const recoveredUser = localStorage.getItem('users')

        if(recoveredUser) {
            setUsers(JSON.parse(recoveredUser))
        }

        setLoading(false)
    }, [])

    const login = (user, password) => {
        console.log("login auth", { user, password })

        const loggedUser = {
            id: '123',
            user,
        }

        localStorage.setItem("users", JSON.stringify(loggedUser))

        if(password === "secret") {
            setUsers(loggedUser);
            navigate("/")
        }
    }
    const logout = () => {
        console.log('logout')
        localStorage.removeItem("users")
        setUsers(null)
        navigate("/login")
    }

    return(
        <AuthContext.Provider value={{authenticated: !!users, users, loading, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}