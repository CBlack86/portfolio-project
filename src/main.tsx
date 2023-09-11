import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState} from 'react';
import App from './App.tsx'
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material';
import {LightThemeOptions, DarkThemeOptions} from './theme.tsx';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <RecoilRoot>
      <BrowserRouter>
        <ThemeProvider theme={isDarkTheme ? createTheme(DarkThemeOptions) : createTheme(LightThemeOptions)}>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </RecoilRoot>
    
  </React.StrictMode>,
)
