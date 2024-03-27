import React from 'react';

function Hero() {
  return (
    <div className='hero h-[100vh] flex justify-around item-center p-20 gap-5'>
      <div className='hero-left gap-5 flex flex-col'>
        <h1 className='text-5xl font-semibold'>  Learn Maths, Science and  </h1>
        <h4 className='text-5xl font-medium '> Programming Languages</h4> 
        <div>
        Get 1-on-1 classes, physical classes and videos with Teach_up~
        </div>
        <h5 className='font-medium'> Login with Whatsapp number</h5>
        <form className>
        <input className=' hover: border-black p-4 w-60' type='text'required placeholder='+91 Whatsapp Number  '>

           </input>
           <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Get</button>
        </form>
       
      </div>
      <div className='hero-right  flex-1 flex  justify-center'>
     <img className="h-[350px]"src="https://img.freepik.com/free-photo/front-view-young-female-student-red-shirt-black-bag-using-laptop-white_140725-16641.jpg?w=740&t=st=1711178707~exp=1711179307~hmac=c01b19645b9b550c67e143d1ff46bf1b0f5499a7c48723d179421e7f875699c4" alt="girl"/>
      </div>
    </div>
  );
}

export default Hero;
