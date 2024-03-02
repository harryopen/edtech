import React from 'react'
import {Link} from  "react-router-dom";
import { useState } from 'react';
import {FaBars, FaTimes ,FaGithub , FaLinkedin, FaFacebook,FaMoon} from 'react-icons/fa';
function Nav() {
  const [nav,setNav]=useState(false)
function  handleclick(){
    setNav(!nav)
  }

// useState for bottom border on particluar component renendering
const [menu,setmenu] =useState("Home")
  return (
    <>
      {/*Menu that will none on mobile display  */}
      <div className='sticky bg-white  top-0 font-thin text-[#4F9E62] w-full border-b-2 h-[80px] flex justify-between items center px-4 font-semibold '> 
          <h5 className=' font-bold text-2xl  p-4 md:ml-5'> Teach_up</h5>
          <ul className=' hidden md:flex gap-4 mt-4'>
              <li> <Link className='text-2xl' to="/Nightmode"><FaMoon/></Link></li>
              <li> <Link onClick={()=>{setmenu("Home")}}to="/">Home{menu=="Home"?<hr/>:<></>}</Link></li> 
              <li> <Link onClick={()=>{setmenu("contact")}} to="/Contact">Contact{menu=="contact"?<hr/>:<></>}</Link></li>
              <li> <Link onClick={()=>{setmenu("About")}}to="/About">About{menu=="About"?<hr/>:<></>}</Link></li>
              <li> <Link onClick={()=>{setmenu("courses")}}to="/Courses">Courses{menu=="courses"?<hr/>:<></>}</Link></li> 
              <li> <Link className='font-bold text-slate-950 'to="/Login"> Login</Link></li>
          </ul>       
      </div>
      {/* Hamburger */}
      <div onClick={handleclick} className='absolute  flex justify-end p-5  md:hidden z-10   '>
        {!nav?<FaBars/>:<FaTimes/>}
          
      </div>
      {/* Mobile view  */}
      <div className={!nav ? 'hidden':' bg-[#215D63] text-white flex flex-col justify-center items-center'}>
               <Link className='py-4 text-4xl' to="/">Home</Link>
               <Link className='py-4 text-4xl'  to="/Contact">Contact</Link>
               <Link className='py-4 text-4xl'  to="/About">About</Link>
               <Link className='py-4 text-4xl'  to="/Courses">Courses</Link>
               <Link  className='py-4 text-4xl' to="/Login">Login</Link>
      </div>
    </>
  )
}

export default Nav
