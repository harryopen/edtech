import React from 'react'
import Courses from './Courses'
import card_details from '../assets/data'
function Home() {
 
  const list =card_details.map(item=>
    <div className=' border-b-2 py-10  flex flex-col gap- justify-center items-center   '>
      <img className='w-80 h-30 rounded ' src={item.img} alt="" /> 
      <h1 className='text-2xl'>{item.name}</h1>
      <p className='md:text-xl'>{item.desc}</p>

    </div>
    )
  return (
    <>
    <div >
        {/* <img src="src\assets\logo1.jpg" className='max-h-[535px] max-w-max'></img> */}
        {/* main part  */}
        <div className=' w-full h-screen bg-gradient-to-b from-[#215D63] to-slate-200 '>
           <div className='max-w-[1000px]  mx-auto flex flex-col justify-center h-screen md:mt-[-250px]'>
            <h1 className='text-4xl'>
              Teach_up Courses
            </h1>
            <h2 className='text-2xl'>
              Avail the free test series for Board classes
            </h2>
            
            </div>
                {/*  main cards  */}
                <div className='flex justify-center mt-[-250px] '>
                   <div className=' flex flex-col md:gap-20 rounded-3xl  md:gap-10 md:flex-row justify-center items-center w-[180vh] h-[80vh] p-2 rounded-3xl bg-white  '>
                   {list }
                   </div>
                </div>
        </div>

     
    </div>
   <Courses/>
    </>
  )
}

export default Home
 