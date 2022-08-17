import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
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
        <AppBar position="static">
          <Tabs centered indicatorColor="secondary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify"> Meu nome é Thabata, sou Desenvolvedora Web Java e mãe!
            Apaixonada por tecnologia, estudo gestão de tecnologia da informação 
            e me participei do Bootcamp Java da Generation, onde nasceu este projeto. 
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