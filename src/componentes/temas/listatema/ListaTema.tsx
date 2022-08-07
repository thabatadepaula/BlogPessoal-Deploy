import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Box, Card, CardActions, CardContent, Button, Typography, Alert,} from "@mui/material";
import "./ListaTema.css";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { busca } from "../../../services/Service";

function ListaTema() {

  const [temas, setTemas] = React.useState<Tema[]>([]);
  const [token, setToken] = useLocalStorage('token');
  let navigate = useNavigate();

  React.useEffect(() => {
    if(token == ''){
      alert("Você precisa estar logado para acessar essa página");
      navigate('/login');
    }
  }, [token]);

  const getTemas = async () => {
    //adicionar try catch
    await busca("/tema", setTemas, {
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