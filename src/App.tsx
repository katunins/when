import React from 'react';

import {BrowserRouter, Route, Routes} from 'react-router-dom';
import NewWhere from './pages/new';
import './app.css'
import {Box} from '@mui/material';
import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <BrowserRouter>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >

        <AppRoutes/>

      </Box>
    </BrowserRouter>
  );
}

export default App;
