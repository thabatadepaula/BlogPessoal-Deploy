interface User {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
    token?: string | null
}
export default User
/*id	integer($int64)
nome*	string
usuario*	string
example: email@email.com.br
senha*	string
maxLength: 2147483647
minLength: 8
foto	string
maxLength: 5000
minLength: 0*/