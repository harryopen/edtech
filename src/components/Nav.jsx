import React from 'react'
import {Link} from  "react-router-dom";
import { useState } from 'react';
import {FaBars, FaTimes ,FaGithub , FaLinkedin, FaFacebook,FaMoon} from 'react-icons/fa';


import cartimg from '../assets/market.png';
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
      <div className='sticky bg-white   font-thick text-[#4F9E62] w-full border-b-2 h-[80px] flex justify-around items center px-4 font-semibold '> 
          <h5 className=' font-bold text-2xl  p-4 md:ml-5'> Teach_up</h5>
          <ul className=' hidden md:flex gap-4 mt-4'>
              <li> <a href='#'  className='text-2xl' to="/Nightmode"><FaMoon/> </a></li>
              <li> <Link onClick={()=>{setmenu("Home")}}to="/">Home{menu=="Home"?<hr/>:<></>}</Link></li> 
              <li> <Link onClick={()=>{setmenu("maths")}} to="/maths">MATHS{menu=="maths"?<hr/>:<></>}</Link></li>
              <li> <Link onClick={()=>{setmenu("python")}}to="/python">PYTHON{menu=="python"?<hr/>:<></>}</Link></li>
              <li> <Link onClick={()=>{setmenu("sql")}}to="/sql">SQl{menu=="sql"?<hr/>:<></>}</Link></li> 
              <li> <Link className='font-bold text-slate-950 'to="/Login"> Login</Link></li>
          </ul> 
          <div className='flex p-1 text-white'>
           <Link to='cart'><img className='h-12 w-auto' src={cartimg} alt=''/> </Link> 
            <div className=' ml-[-5px] bg-red-600 h-5 w-5 flex justify-center items-center rounded'>0</div>
            </div>      
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
