import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';
import { TokenState } from "../../../store/tokens/tokensReducer";
import "./Navbar.css";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
    let navigate = useNavigate();
    const dispatch = useDispatch();
    

    function goLogout(){
        dispatch(addToken(''))
        toast.info('Usuário deslogado', {
          position: "top-right",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          theme: "colored",
          progress:  undefined,
        })
        navigate('/login')

    }  

    var navbarComponent;

    if(token != ""){
      navbarComponent = <AppBar position="static" className='bg-menu'>
      <Toolbar className='container' variant="dense">
        <Box className="cursor">
          <Typography className='title' variant="h6" color="inherit">
              Blog Pessoal
          </Typography>
        </Box>

        <Box display="flex" justifyContent="start">
        <Link to="/home" className="text-decorator-none">
           <Box mx={1} className="cursor" display="flex" justifyContent="start" >
          <Typography className='title' variant="h6" color="inherit">
              Home
          </Typography>
        </Box>
        </Link>

  

         <Link to="/postagens" className="text-decorator-none">
           <Box mx={1} className="cursor" display="flex" justifyContent="start" >
          <Typography className='title' variant="h6" color="inherit">
              Postagens
          </Typography>
        </Box>
        </Link>

        <Link to="/temas" className="text-decorator-none">
           <Box mx={1} className="cursor" display="flex" justifyContent="start" >
          <Typography className='title' variant="h6" color="inherit">
              Temas
          </Typography>
        </Box>
        </Link>

  <Link to='/formularioTema' className="text-decorator-none">
    <Box mx={1} className="cursor" display="flex" justifyContent="start" >
    <Typography className='title' variant="h6" color="inherit">
        Cadastrar Tema
    </Typography>
    </Box>
    </Link>

    <Box mx={1} className="cursor" display="flex" justifyContent="start" onClick={goLogout} >
      <Typography className='title' variant="h6" color="white">
          Logout
      </Typography>
      </Box>
      
      
      </Box>

      </Toolbar>
  </AppBar>

    }
    
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar