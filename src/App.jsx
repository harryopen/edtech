import {BrowserRouter, Routes, Route , Link} from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Courses from "./components/Courses"
import Login from "./Login"
import Contact from "./Contact"
import Math from "./components/Math"
import CourseDetail from "./components/CourseDetail"


function App() {

  return (
    <>
      <BrowserRouter>
      
        <Nav/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>     
        <Route path="/Courses" element={<Courses/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        

        </Routes>  
       
    </BrowserRouter> 
      
    </>
  )
}

export default App
