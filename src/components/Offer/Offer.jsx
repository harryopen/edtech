import React from 'react'

const Offer = () => {
  return (
    <div className=' border offer w-[65%] h-[60vh] flex m-auto p-10 mb-[150px] '
    >
        <div className='offer-left  flex-1 flex flex-col justify-center '>
            <h1 className='text-red-600 text-5xl font-medium'>Exclusive</h1>
            <h1 className='text-red-600 text-5xl font-medium'>offers For you</h1>
            <p className='text-[#171717] text-xl font-medium'>Only on best selling course</p>
            <button className='w-[282px] h-[70px] rounded-[35px] bg-[#ff4141] border-none text-white
            text-xl mt-[30px] cursor-pointer'> Check Now</button>
        </div>
        <div children='offer-right flex-1 flex  item-center  pt-[50px]'>
            <img className='h-[350px]' src={`https://img.freepik.com/free-photo/front-view-young-female-student-red-t-shirt-holding-copybook-smiling-white_140725-16677.jpg?size=626&ext=jpg&ga=GA1.1.1040751204.1692302919&semt=ais`}>
            </img>
        </div>
    </div>
  )
}

export default Offer