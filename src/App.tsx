import Projects from "./Projects.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Welcome from "./Welcome.tsx";
import NavBar from "./NavBar.tsx";
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import React from 'react';
import {useState} from "react";
import { ThemeProvider } from '@emotion/react';
import {themeOptions} from "./theme.tsx"
import { CssBaseline } from "@mui/material";

function App() {

  return (
    <React.Fragment>
    <ThemeProvider theme={themeOptions}>
    <CssBaseline enableColorScheme />
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
      
     
      </ThemeProvider>
    </React.Fragment>
  )
}
function Layout() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App
