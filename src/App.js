import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Timer from './components/Timer';
import Calendar from './components/Calendar';
import  './styles/App.css';

 
function App() {    
  return (
    <div className="App">
      
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <div className='top__bar'>
            <Calendar/>
        </div>
      </Grid>
      <Grid item xs={12} md={3}>
        <div className='sidebar'>
          <Timer/>
        </div>
      </Grid>
      <Grid item xs={9}>
        
      </Grid>
    </Grid>
    </div>
  );
}

export default App;
