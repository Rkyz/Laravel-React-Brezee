import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react'
import { SiValorant } from "react-icons/si";
import { GrFormPrevious } from "react-icons/gr";
import { SlOptionsVertical } from "react-icons/sl";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { PiUsersThreeLight } from "react-icons/pi";
import NavLink from '@/Components/NavLink';

const Side = ({children, side}) => {
    
    const {url} = usePage();
    console.log(url)
    const now = new Date();
    const dayOfWeek = now.toLocaleDateString('en-US', { weekday: 'short' });
    const dateOfWeek = now.toLocaleDateString('en-US', { day: 'numeric' }) + ' ' + now.toLocaleDateString('en-US', { month: 'short' });
  return (
    <div className={`h-screen fixed z-50 w-full flex flex-col items-center justify-between bg-white border-r-[2px] border-gray-200 ${side ? 'max-w-[250px]':'max-w-[85px]'}`}>
        <div className='flex flex-col w-full'>
            <div className='relative flex items-center p-[20px] border-b-[2px] border-gray-200'>
                <div className='flex gap-[15px] items-center'>
                    <div className='bg-red-500 p-[10px] rounded'>
                    <SiValorant className='text-white text-[25px]'/>
                    </div>
                <div className={`flex flex-col ${!side && 'hidden'}`}>
                    <p className='text-[18px] font-bold'>Cashier</p>
                    <p className='text-[10px] text-gray-400 font-bold'>{dayOfWeek}, {dateOfWeek}</p>
                </div>
                </div>
          
            </div>
            <div className='w-full h-auto '>
                <nav className='flex flex-col'>
                    <div className='flex flex-col gap-[10px] border-b border-gray-300'>
                        <div className={`flex items-center  px-[20px] pt-[20px] ${!side ? 'justify-center mb-[10px]':'justify-between'} `}>
                            {side ? (
                                <p className='text-gray-500 text-[12px] uppercase font-bold'>menu dashboard</p>
                                ):(
                                <p className='text-gray-500 text-[12px] uppercase font-bold'>menu</p>
                            )}
                        <button className={`text-[12px] rotate-90 text-gray-500 hover:bg-black p-[10px] rounded-full hover:bg-opacity-10 ${!side && 'hidden'} `}>
                            <SlOptionsVertical/>
                        </button>
                        </div>
                            <ul className='flex flex-col gap-[20px] pb-[20px]'>
                                <li className='relative'>
                                    <Link href="/dashboard" className={`flex items-center gap-[10px] px-[20px] ${url === '/dashboard' && 'bg-transparent before:bg-[#D68285] before:h-full before:w-[5px] before:absolute before:left-0'} ${!side && 'justify-center'} `}>
                                        <BsFillGrid1X2Fill className={`${url === '/dashboard' ? 'text-[#D68285]':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium text-[15px]  ${url === '/dashboard' ? 'text-gray-500':'text-gray-400'} ${!side && 'hidden'}`}>dashboard</p>
                                    </Link>
                                </li>
                                <li className='relative'>
                                    <Link href="/menu" className={`flex items-center gap-[10px] px-[20px]  ${url === '/menu' | url === '/menu/food' && 'bg-transparent before:bg-[#D68285] before:h-full before:w-[5px] before:absolute before:left-0'} ${!side && 'justify-center'} `}>
                                        <MdOutlineRestaurantMenu className={`${url === '/menu' ? 'text-[#D68285]':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium text-gray-400 text-[15px] ${url === '/menu' ? 'text-gray-500':'text-gray-400'} ${!side && 'hidden'}`}>menu</p>
                                    </Link>
                                </li>
                                <li className='relative'>
                                    <Link href="/product" className={`flex items-center gap-[10px] px-[20px]  ${url === '/product' | url === '/product/create' && 'bg-transparent before:bg-[#D68285] before:h-full before:w-[5px] before:absolute before:left-0'} ${!side && 'justify-center'} `}>
                                        <BsBoxSeam className={`${url === '/product' | url === '/product/create'  ? 'text-[#D68285]':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium text-gray-400 text-[15px] ${url === '/product' | url === '/product/create'  ? 'text-gray-500':'text-gray-400'} ${!side && 'hidden'}`}>product</p>
                                    </Link>
                                </li>
                                <li className='relative'>
                                    <Link href="/product" className={`flex items-center gap-[10px] px-[20px]  ${url === '/user' | url === '/user/create' && 'bg-transparent before:bg-[#D68285] before:h-full before:w-[5px] before:absolute before:left-0'} ${!side && 'justify-center'} `}>
                                        <PiUsersThreeLight className={`text-[20px] ${url === '/user' | url === '/user/create'  ? 'text-[#D68285]':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium text-gray-400 text-[15px] ${url === '/user' | url === '/user/create'  ? 'text-gray-500':'text-gray-400'} ${!side && 'hidden'}`}>user</p>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                    <div className={`flex flex-col gap-[10px] py-[20px] ${!side && 'mb-[10px]'}`}>
                        <div className={`flex px-[20px] items-center  ${!side ? 'justify-center mb-[10px]':'justify-between'}`}>
                            <p className='text-gray-500 text-[12px] uppercase font-bold'>general</p>
                            <button className={`text-[12px] rotate-90 text-gray-500 hover:bg-black p-[10px] rounded-full hover:bg-opacity-10 ${!side && 'hidden'}`}>
                                <SlOptionsVertical/>
                            </button>
                        </div>
                            <ul>
                                <li className='relative'>
                                    <Link href="/setting" className={`flex items-center gap-[10px] px-[20px]  ${url === '/setting' && 'bg-transparent before:bg-[#D68285] before:h-full before:w-[5px] before:absolute before:left-0'} ${!side && 'justify-center'}`}>
                                        <IoSettingsOutline className={`${url === '/setting' ? 'text-[#D68285]':'text-gray-400'}`}/>
                                        <p className={`capitalize font-medium text-gray-400 text-[15px] ${url === '/setting' ? 'text-gray-500':'text-gray-400'} ${!side && 'hidden'}`}>setting</p>
                                    </Link>
                                </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <div className=' w-full flex flex-col gap-[10px] bg-transparent p-[20px]'>
            <div className={` grid rounded-md p-[5px] ${side ? 'bg-[#edecf1] grid-cols-2':'grid-cols-1'}`}>
                <button className={`p-[10px] rounded-sm capitalize font-bold flex items-center gap-[10px] ${side ? 'text-gray-400':'text-black bg-transparent'}`}>
                    <IoMoonOutline/>
                    <p className={`${!side && 'hidden'}`}>dark</p>
                </button>
                <button className={`p-[10px]  rounded-sm text-gray-500 capitalize font-bold flex items-center gap-[10px] ${side ? 'text-gray-500 bg-white':'text-black bg-blue-500 hidden'}`}>
                    <IoSunnyOutline/>
                    <p className={`${!side && 'hidden'}`}>white</p>
                </button>
            </div>
        <NavLink href={route('logout')} method="post" as="button" className='bg-red-500 p-[10px] flex items-center justify-center text-white capitalize rounded-md font-bold'>
            logout
        </NavLink>
        </div>
    </div>
  )
}

export default Side
