

import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';

import { ThemeProvider } from '@mui/material/styles';
import { myTheme } from './src/theme/myTheme';


const rootElement = document.getElementById('root');
ReactDOM.render(

  <ThemeProvider theme={myTheme}>
    <App />
  </ThemeProvider>,
  rootElement
);
