import axios from "axios";


const api = axios.create({
    baseURL: "https://blogpessoal-fwiy.onrender.com"
})

export const cadastrarUsuario = async(url: string, dados: object, setdados: Function) => {
    const resposta = await api.post(url, dados);
    setdados(resposta.data)
}

export const login = async(url: string, dados: object, setdados: Function) => {
    const resposta = await api.post(url, dados);
    setdados(resposta.data)
}