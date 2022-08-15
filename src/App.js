import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Timer from './components/Timer';
import  './styles/App.css';

 
function App() {  
  let today = new Date();

  return (
    <div className="App">
      
    <Grid container spacing={2}>
      <Grid item xs={12} md={12}>
        <div className='top__bar'>
            <div className='top__calendar'>{today.getMonth()+1}</div>
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
