import Projects from "./Projects.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Welcome from "./Welcome.tsx";
import NavBar from "./NavBar.tsx";
import { Routes, Route, Outlet } from "react-router-dom";
import './App.css'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<Welcome />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
      
     
      
    </>
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
