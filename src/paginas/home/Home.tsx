
import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import { TokenState } from "../../store/tokens/tokensReducer";
import "./Home.css";

function Home() {

  let history = useNavigate();
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
        history("/login")

    }
}, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem vinde!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Expresse aqui os seus pensamentos e deixe seu maternar mais leve!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            <Link to="/postagens" className="text-decorator-none bg-btnhome" >
              <Button variant="outlined" className="btn">
                Ver Postagens
              </Button>
            </Link>
          </Box>
        </Grid>
        
        <Grid item xs={6}>
          <img
            src="https://i.imgur.com/w5MjXXP.png"
            alt="Tela Inicial - Mães unidas"
            width="500px"
            height="350px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;