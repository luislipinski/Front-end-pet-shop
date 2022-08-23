import React, { useState, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvicer = ({children}) => {

    const [users, setUsers] = useState(null);
    const login = (user, password) => {
        console.log("login auth", { user, password })
        setUsers({id: "1", user})
    }
    const logout = () => {
        console.log('logout')
    }

    return(
        <AuthContext.Provider value={{authenticated: !!users, users, login}}>
            {children}
        </AuthContext.Provider>
    )
}