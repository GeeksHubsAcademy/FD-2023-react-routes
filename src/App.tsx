import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Project from "./pages/Projects/Project";
import { Routes, Route } from "react-router-dom"
import './App.css'

function App() {

  return ( 
    <>
      <Routes>
        <Route path="*" element={<h1>404</h1>} />
        <Route path="/" element={<Home />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/projects" element={<Project />}/>
      </Routes>
    </>  
  )
}

export default App
