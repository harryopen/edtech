import React from 'react'

const Item = (props) => {
  return (
    <>
     <div className='w-350px hover:transform hover:transition-[0.6s]'>
        <img  className='' src={props.image}/>
        <p className='mt-[6px] mb-0'>{props.name}</p>
        <div className='flex  gap-5'>
            <div className='text-red-600 text-[14px] font-semibold'>$ {props.new_price}</div>
            <div className='text-black text-[14px] font-semibold  line-through '> ${props.old_price} </div>
        </div>
     </div>
    </>
  )
}

export default Item