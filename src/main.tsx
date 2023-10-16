import React from 'react'
import ReactDOM from 'react-dom/client'
import {useState} from 'react';
import App from './App.tsx'
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import './index.css'




ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    
    <RecoilRoot>
      <BrowserRouter>
        
          <App />
        
      </BrowserRouter>
    </RecoilRoot>
    
  </React.StrictMode>,
)
