import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://mamaeblog.herokuapp.com/'
})
export const login = async (url: any, dados: any, setDado: any) => {
    //const armazena dados e variaveis
    const resposta = await api.post(url, dados);
    setDado(resposta.data.token);
}

export const cadastroUsuario  = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados);
    setDado(resposta.data);
}

//headers: { Authorization: `Bearer ${token}` } header recebe o token e faz veirificação de autorização
export const busca = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header);
    setDado(resposta.data);
}

//PERMITE QUE FAÇA UMA BUSCA ESPECIFICA PELO ID
export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header);
    setDado(resposta.data);
}

//cadastrar
export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header);
    setDado(resposta.data);
}

//atualizar
export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header);
    setDado(resposta.data);
}

//excluir
export const deleteId = async (url: any, header: any) => {
    await api.delete(url, header);
}