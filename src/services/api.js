import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:3500/api/v1",
})

export const createSession = async (login, password) => {
    return api.post("/users/login", {login, password})
}

export const getUsers = async () => {
    return api.get("/users/search")
}