import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import App from './App.jsx';
import { myTheme } from './theme/myTheme.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
