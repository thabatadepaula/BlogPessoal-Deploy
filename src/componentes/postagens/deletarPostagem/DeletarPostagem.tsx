import React, { useEffect, useState } from 'react'
import {Typography, Button, Card, CardActions, CardContent } from "@material-ui/core"
import { Box } from '@mui/material';
import './DeletarPostagem.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../services/Service';


function DeletarPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>(); // id do tema a ser editado
  const [token, setToken] = useLocalStorage("token");

  const [post, setPosts] = useState<Postagem>();

  useEffect(() => {
    if(token == ""){
        alert("Você precisa estar logado para acessar essa página");
        navigate("/login");
    }
    }, [token]);

    useEffect(() => {
        if(id != undefined){
            findById(id);
        }
    }, [id]);

    const findById = async (id: string) => {
        //adicionar try catch
        buscaId(`/postagem/${id}`, setPosts, {
            headers: {
                'Authorization': token
            }
        })
    };

    const sim = () => {
        navigate("/posts");
        deleteId(`/postagem/${id}`, {
            headers: {
                'Authorization': token
            }
        });
        alert("Postagem deletada com sucesso");
    }
    const nao = () => {
        navigate("/posts");
    }
   
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
              <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                Sim
              </Button>
              </Box>
              <Box>
              <Button onClick={nao}  variant="contained" size='large' color="secondary">
                Não
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;