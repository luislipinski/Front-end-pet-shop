import React, { useState, useEffect, useContext } from 'react'
import { useResolvedPath } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';

import { getUsers } from '../../services/api'

const HomePage = () => {
    const { logout } = useContext(AuthContext);
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await getUsers();
            setUsers(response.data);
            setLoading(false);
        })();
    }, []);

    const handleLogout = () => {
        logout()
    }

    if(loading) {
        return <div className="loading">Carregando dados...</div>
    }
    return (
        <>
            <h1>HomePage</h1>
            <button onClick={handleLogout}>Sair</button>
            <ul>
               {
                users.map((user) => (
                    <li key={user.id}>
                        {user.id} - {user.login}
                    </li>
                )
               )} 
            </ul>

        </>
    )
}

export default HomePage;