import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Box, Typography } from '@mui/material';

import './Footer.css'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

      var footerComponent;

      if(token != ""){

        footerComponent = <Grid container direction = "row" justifyContent = "center" alignItems = "center" className = 'bg-menu2' >
        <Grid alignItems="center" item xs = { 12} >
            <Box className="box1" >
                <Box paddingTop={ 1 } display = "flex" alignItems = "center" justifyContent = "center" className='bg-menu2' >
                    <Typography variant="h6" align = "center" gutterBottom className='textos'> 
                    Siga-nos nas redes sociais: </Typography>
</Box>
< Box display = "flex" alignItems = "center" justifyContent = "center" className='bg-menu2' >
    <a href="https://www.instagram.com/tthayoliiver/" target = "_blank" rel = "noopener noreferrer" >
        <InstagramIcon className="redes" />
            </a>
            <a href= "https://www.linkedin.com/in/thabatadepaula/" target = "_blank" rel = "noopener noreferrer" >
                <LinkedInIcon  className="redes" />
                    </a>
                    </Box>
                    </Box>
                    <Box className="box2 bg-menu2">
                        <Box paddingTop={ 1 } className='bg-menu2'>
                            <Typography variant="subtitle2" align = "center" 
                                        gutterBottom className='textos' >© 2022 Copyright: </Typography>
                                </Box>
                                <Box  className = 'bg-menu2 box2' >
                                    <a target="_blank" href = "https://brasil.generation.org" rel = "noopener noreferrer"  className="text-decorator-none">
                                        <Typography variant="subtitle2" gutterBottom className='textos' align = "center" > brasil.generation.org </Typography>
                                            </a>
                                            </Box>
                                            </Box>
                                            </Grid>
                                            </Grid>

      }
    return (
        <>
        {footerComponent}
        </>
    )
}

export default Footer;