import React from 'react'
import all_courses from '../../assets/all_courses'
import Item from '../item/Item'
const Popular = () => {
  return (
    <>
    <div className='flex flex-col items-center  gap-3 h-[90vh]'>
        <h1 className='text-[#252525] text-4xl font-medium'>  Popular courses</h1>
        <hr className='w-[200px] h-2 rounded-[10px] bg-[#252525]'/>
        <div className='mt-[50px] flex gap-[30px]'>
            {all_courses.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.img}
                old_price={item.old_price}
                new_price ={item.new_price}
                />
            })}

        </div>

    </div>
    </>
  )
}

export default Popular