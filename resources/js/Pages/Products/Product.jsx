import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head, Link } from '@inertiajs/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from 'react';
import burger from '../../../img/burger.png'
import { HiOutlinePencilAlt } from "react-icons/hi";
import { HiPencilAlt } from "react-icons/hi";
import { PiEye } from "react-icons/pi";
import { FaRegTrashCan } from "react-icons/fa6";
import { GoPencil } from "react-icons/go";
import { IoTrashOutline } from "react-icons/io5";

export default function Product({ auth }) {
    const [state, setState] = useState(false);
    const handleState = () => {
        setState(!state);
    }

    return (
        // // <AuthenticatedLayout
        // //     user={auth.user}
        // //     header={<h2 className="font-semibold text-xl text-gray-800 idk:text-gray-200 leading-tight">Dashboard</h2>}
        // // >
        //     <Side>
        // <div className='h-screen w-full'>
        
        //     </Side>
        // </div>
        // // </AuthenticatedLayout>
        <MainLayout>
             <Head title="Dashboard" />
                <div className='w-full h-full flex flex-col gap-[10px]'>
                    <div className='bg-white w-full sticky top-[96.5px] border border-gray-200 flex items-center justify-between h-auto p-[15px] rounded-sm'>
                        <p className='capitalize font-bold'>product</p>
                        <Link href="/product/create" className='bg-red-500 text-white capitalize font-bold rounded-sm p-[10px]'>
                            add product
                        </Link>
                    </div>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='bg-transparent grid grid-cols-3 gap-[10px]'>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white p-[15px] rounded-sm flex flex-col gap-[25px]'>
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-[15px]'>
                                    <div className='w-[50px] bg-black rounded-md h-[50px]'>
                                        img
                                    </div>
                                    <div>
                                        <p className='text-[18px] capitalize font-bold'>burger</p>
                                        <p className='text-[14px] capitalize font-bold text-gray-400'>20 pcs</p>
                                    </div>
                                    </div>
                                    <div className='flex gap-[10px]'>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <HiOutlinePencilAlt/>
                                        </button>
                                        <button className='text-[20px] bg-red-500 p-[8px] rounded-md text-white'>
                                            <FaRegTrashCan/>
                                        </button>
                                    </div>
                                </div>
                                <div className='flex gap-[15px] items-center'>
                                    <p className='whitespace-nowrap font-bold '>RP 5.000/pcs</p>
                                    <div className='w-full h-auto flex gap-[10px]'>
                                    <button className='w-full bg-red-500 rounded-md p-[10px] text-white capitalize font-bold'>
                                        restok product
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
