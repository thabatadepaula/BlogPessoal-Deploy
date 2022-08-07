import { Grid, Box, Typography, TextField, Button } from "@mui/material";
import React, { ChangeEvent, useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import UserLogin from "../../models/UserLogin";
import useLocalStorage from "react-use-localstorage";
import { login } from "../../services/Service";

function Login() {

  let history = useNavigate();
  const [token, setToken] = useLocalStorage("token");
  const [userLogin, setUserLogin] = useState<UserLogin>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
    token: ''
  });



  function updatedModel(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setUserLogin({ ...userLogin,
       [e.target.name]: e.target.value });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    try{
      await login(`/usuarios/logar`, userLogin, setToken);
      alert ("Login realizado com sucesso!");
    } catch(error){
       alert('Dados do usuario incorretos!');
    }
  }

  useEffect(() => {
    if (token != "") {
      history("/home");
    }
  }, [token]);

  return (
    <>
      <Grid container direction='row' justifyContent='center' alignItems='center' >{/*style={{ backgroundColor: "#222", color: "white", minHeight:"70vh"}} */}
        <Grid alignItems='center' xs={6}>
          <Box paddingX={20} >
            <form onSubmit={onSubmit} >
              <Typography
                variant="h3"
                gutterBottom
                color="textPrimary"
                component="h3"
                align="center"
                className="textos1"
              >
                Entrar
              </Typography>
              <TextField value={userLogin.usuario} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuário' className="cor1" variant='outlined' name='usuario' margin='normal' fullWidth />
              <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' className="cor1" variant='outlined' name='senha' type='password' margin='normal' fullWidth />
              <Box textAlign='center'  >

                  <Button type='submit' variant='contained' color="primary" fullWidth className="bg-btn">
                    Logar
                  </Button>

              </Box>
            </form>
            <Box display='flex' justifyContent='center' marginTop={2}>
              <Box marginRight={1}>
                <Typography variant='subtitle1' gutterBottom alignItems='center' >Não tem uma conta ?</Typography>
              </Box>
              <Link to={"/cadastrousuario"}>
                <Typography variant='subtitle1' gutterBottom alignItems='center' className="textos1" >Cadastre-se</Typography>
              </Link>
            </Box>
          </Box>
        </Grid>
        
        <Grid xs={6} className="imag" >
        </Grid> 
        
      </Grid>
    </>
  );
}

export default Login;