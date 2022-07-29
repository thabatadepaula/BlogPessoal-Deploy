import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Box, Typography } from '@mui/material';
import Navbar from '../navbar/Navbar';

function Footer() {
    return (
        <>
        <Grid container direction = "row" justifyContent = "center" alignItems = "center" className = 'bg-menu' >
            <Grid alignItems="center" item xs = { 12} >
                <Box style={ { height: "120px" } } >
                    <Box paddingTop={ 2 } display = "flex" alignItems = "center" justifyContent = "center" >
                        <Typography variant="h6" align = "center" gutterBottom style = {{ color: "white" }
}> Siga - nos nas redes sociais </Typography>
    </Box>
    < Box display = "flex" alignItems = "center" justifyContent = "center" >
        <a href="https://www.instagram.com/tthayoliiver/" target = "_blank" rel = "noopener noreferrer" >
            <InstagramIcon style={ { fontSize: 60, color: "white" } } />
                </a>
                <a href= "https://www.linkedin.com/in/thabatadepaula/" target = "_blank" rel = "noopener noreferrer" >
                    <LinkedInIcon style={ { fontSize: 60, color: "white" } } />
                        </a>
                        </Box>
                        </Box>
                        <Box style = {{ height: "60px" }}>
                            <Box paddingTop={ 2 }>
                                <Typography variant="subtitle2" align = "center" 
                                            gutterBottom style = {{ color: "white" }} >© 202 Copyright: </Typography>
                                    </Box>
                                    <Box style = {{ height: "60px" }} className = 'bg-menu' >
                                        <a target="_blank" href = "https://brasil.generation.org" rel = "noopener noreferrer" >
                                            <Typography variant="subtitle2" gutterBottom style = {{ color: "white" }} align = "center" > brasil.generation.org </Typography>
                                                </a>
                                                </Box>
                                                </Box>
                                                </Grid>
                                                </Grid>
                                                </>
    )
}

export default Footer;