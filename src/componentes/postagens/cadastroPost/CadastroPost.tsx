import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, } from "@material-ui/core"
import './CadastroPost.css';
import { useNavigate, useParams } from 'react-router-dom';
import Tema from '../../../models/Tema';
import Postagem from '../../../models/Postagem';
import { busca, buscaId, post, put } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import { Grid } from '@mui/material';




function CadastroPost() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );


    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado.', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress:  undefined,
              })
            navigate("/login")

        }
    }, [token])

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ""
    })
    const [postagem, setPostagem] = useState<Postagem>({
        id: 0,
        titulo: "",
        texto: "",
        data: "",
        foto: "",
        tema: null
    })

    useEffect(() => {
        setPostagem({
            ...postagem,
            tema: tema
        })
    }, [tema])

    useEffect(() => {
        getTemas()
        if(id !== undefined){
            findByIdPostagem(id)
        }
    } , [id])


    const getTemas = async () => {
        await busca('/temas', setTemas, {
            headers: {
                'Authorization': token
        }
    })
    }

    const findByIdPostagem = async (id: string) => {
        await buscaId(`/postagens/${id}`, setPostagem, {
            headers: {
                'Authorization': token
        }
    })
    }

    function updatedPostagem(e: ChangeEvent<HTMLInputElement>) {

        setPostagem({
            ...postagem,
            [e.target.name]: e.target.value,
            tema: tema
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem atualizada com sucesso.', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress:  undefined,
              })
        } else {
            post(`/postagens`, postagem, setPostagem, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Postagem cadastrada com sucesso.', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress:  undefined,
              })
        }
        back()

    }

    function back() {
        navigate('/postagens')
    }



 
    return (
        <Grid
          container
          maxWidth="50vw"
          maxHeight="100vh"
          className="bg-cadastrar-post form"
        >
        <Container maxWidth="sm" className="topo form">
            <form onSubmit={onSubmit} >
                <Typography variant="h3" 
                color="textSecondary" 
                component="h1" 
                align="center" className='form' >Cadastre uma nova postagem</Typography>
                
                <TextField value={postagem.titulo} 
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}  
                id="titulo" 
                label="Título" 
                variant="outlined" 
                name="titulo" 
                margin="normal" fullWidth />
                
                <TextField value={postagem.texto}  
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)} 
                id="texto" 
                label="Texto" 
                name="texto"
                variant="outlined" 
                margin="normal" fullWidth />

                 <TextField
              value={postagem.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPostagem(e)}
              id="foto"
              label="Foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
            />
                <FormControl  >
                    <InputLabel id="demo-simple-select-helper-label" className='form'>Tema </InputLabel>
                    <Select    
                        labelId="demo-simple-select-helper-label" 
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/temas/${e.target.value}`, setTema, {
                            headers: {
                                'Authorization': token
                            }
                        })}>
                        {
                            temas.map(tema => (
                                <MenuItem value={tema.id}>{tema.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha um tema para a postagem</FormHelperText>
                    <Button type="submit" variant="contained" color="primary" className="bg-btnfinalizar">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
        </Grid>
    )
}
export default CadastroPost;