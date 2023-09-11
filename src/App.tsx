import Projects from "./Projects.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Welcome from "./Welcome.tsx";
import NavBar from "./NavBar.tsx";
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css'
import React from 'react';
import {useState} from "react";

function App() {
  // The light theme is used by default
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // This function is triggered when the Switch component is toggled
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <React.Fragment>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
      
     
      
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
