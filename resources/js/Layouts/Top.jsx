import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoOptionsOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Top = ({handleOpenCart, handleSide, side}) => {
  return (
    <div className={`w-full fixed max-h-[86.5px] z-[49] h-full bg-white py-[20px] pr-[20px]  flex items-center justify-between border-b-[2px] border-gray-200 ${side ? 'pl-[270px]':'pl-[100px]'}`}>
      <div className='w-auto h-full flex items-center gap-[10px] '>
      <button onClick={handleSide} className=' bg-[#EDEEF2] text-gray-400 rounded-sm p-[12px] text-[20px] capitalize '>
                   <RxHamburgerMenu/>
                </button>
        <div className='bg-[#EEEEF1] h-full flex items-center rounded-sm gap-[10px]'>
            <button className='p-[10px] text-[15px]'>
                <IoSearchOutline/>
            </button>
            <input type="text" placeholder='search menu..' className='bg-transparent outline-none border-none placeholder:capitalize placeholder:font-bold'/>
            <div className='py-[10px] pr-[5px]'>
            <button className='bg-white p-[10px] h-full rounded-sm text-[15px]'>
                <IoOptionsOutline/>
            </button>
            </div>
        </div>
      </div>
      <div className='w-full flex gap-[10px] items-center justify-end h-full bg-transparent'>
        <button className='bg-transparent bg-opacity-10 gap-[10px] h-full rounded-sm font-bold capitalize text-gray-400 flex items-center p-[10px]'>
            <IoOptionsOutline className='text-[20px]'/>
            <p>option</p>
        </button>
        <button onClick={handleOpenCart} className='bg-[#F55552] bg-opacity-10 gap-[10px] h-full rounded-sm font-bold capitalize text-[#F55552] flex items-center p-[10px]'>
            <IoCartOutline className='text-[20px]'/>
            <p>cart</p>
        </button>
      </div>
    </div>
  )
}

export default Top
