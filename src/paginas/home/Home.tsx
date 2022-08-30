
import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagem from "../../componentes/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import { TokenState } from "../../store/tokens/tokensReducer";
import Caroussel from "../../componentes/caroussel/Caroussel";
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
          <Grid item xs={12} className="backhome">
                
            </Grid>
        <Grid alignItems="center" item xs={12} className="backhome">
        <Caroussel/>
          <Box paddingX={22} className="inicio">
          <img src="https://i.imgur.com/IOiTPqj.png" alt="Imagem de Boas Vindas."  />
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagem />
            </Box>
            </Box>
        </Grid> 
        <Grid xs={12} className="postagens">
          <TabPostagem/>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;