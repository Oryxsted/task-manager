import React from 'react';
import { Grid } from '@mui/material';
import  '../styles/App.css';

import MainContent from './mainContent/MainContent';
import LeftBar from './leftBar/LeftBar';
import TopBar from './topBar/TopBar';

/**
 * 
 * @returns Основной компонент приложения, выводит структуру
 */
 const Main = () => {
    let options = {
        timer: {
          workInterval:25,
          chillInterval:5,
        },
      };

    return (
    <Grid container spacing={0}>
      <Grid item xs={12} md={12}>
        <TopBar/>
      </Grid>
      <Grid item xs={12} md={3}>
        
        <LeftBar />
        
      </Grid>
      <Grid item xs={9} p={0} >

        <MainContent/>

      </Grid>
    </Grid>
    );
 }
 export default Main;