import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";
import "./Navbar.css";

function Navbar() {
    const [token, setToken] = useLocalStorage('token');
    let navigate = useNavigate();

    function goLogout(){
        setToken('')
        alert("Usuário deslogado")
        navigate('/login')

    }  
    
    return (
        <>
            <AppBar position="static" className='bg-menu'>
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

            <Link to="/sobre" className="text-decorator-none">
              <Box mx={1} className="cursor" display="flex" justifyContent="start" >
              <Typography className='title' variant="h6" color="inherit">
                  Sobre
                </Typography>
              </Box>
            </Link>

                   <Link to="/posts" className="text-decorator-none">
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
        </>
    )
}

export default Navbar