import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box, Card, CardActionArea, CardContent, CardMedia} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='backgroundtab' >
          <Tabs centered indicatorColor="secondary" onChange={handleChange} >
            <Tab label="Todas as postagens" value="1" className="titulo3"/>
            <Tab label="Sobre-nós" value="2" className="titulo3"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1">
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
        <Card>
          <CardContent>
                <CardActionArea  className='wwh' >
                  <CardMedia
                    className='br-50 wh'
                    component="img"
                    src="https://i.imgur.com/rh8l4ts.jpg"
                    title="foto"
                  />
                 
                </CardActionArea>
              </CardContent>
          </Card>
          
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify" className='titulo2'> 
          
          
          Meu nome é Thabata,  Mãe e Desenvolvedora Web Java.
            Apaixonada por tecnologia, estudo gestão de tecnologia da informação 
            e participei do Bootcamp Java da Generation, onde nasceu este projeto. 
            Também adoro livros e artes em geral.
            Adoro me arriscar nas artes digitais e em novos desafios. 
            Meu objetivo aqui é criar um espaço onde mães possam se acolher e se ajudar.
            Meus planos pessoais é me formar em desenvolvimento de sistemas, 
            trabalhar em projetos que ajudem a transformar a sociedade, com diversidade sexual, formação e empoderamento de mulheres periféricas, 
            combatendo a desigualdade social e racial. Juntes somos mais fortes!!</Typography>
            
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;