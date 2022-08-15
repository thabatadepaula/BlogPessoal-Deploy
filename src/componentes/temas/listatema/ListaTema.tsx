import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Box, Card, CardActions, CardContent, Button, Typography, Alert,} from "@mui/material";
import "./ListaTema.css";
import Tema from "../../../models/Tema";
import { busca } from "../../../services/Service";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { toast } from "react-toastify";

function ListaTema() {

  const [temas, setTemas] = React.useState<Tema[]>([]);
  let navigate = useNavigate();

  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  
  React.useEffect(() => {
    if(token == ''){
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
      navigate('/login');
    }
  }, [token]);

  const getTemas = async () => {
    //adicionar try catch
    await busca("/temas", setTemas, {
    headers: {
      'Authorization':  token
    }
  });
  }

  React.useEffect(() => {
    getTemas();
  } , [temas.length]);



  return (
    <>
    {
      temas.map(tema => (
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h5" component="h2">
              {tema.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5} >
              <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      } 
    </>
  );
}


export default ListaTema;