import Projects from "./Projects.tsx";
import About from "./About.tsx";
import Contact from "./Contact.tsx";
import Welcome from "./Welcome.tsx";
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
    <div style={{backgroundColor: '#d9d9d9'}}>
      <Outlet />
    </div>
  );
}

export default App
