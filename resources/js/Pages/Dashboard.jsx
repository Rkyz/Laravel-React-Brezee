import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { useState } from 'react';
import burger from '../../img/burger.png'

export default function Dashboard({ auth }) {
    const [state, setState] = useState(false);
    const handleState = () => {
        setState(!state);
    }

    console.log(auth,'asu')


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
        <MainLayout  >
             <Head title="Dashboard" />
                <div className='w-full h-full flex flex-col gap-[10px]'>
                    <div className='p-[25px] sticky top-[96.5px] border-[2px] border-gray-200 bg-white rounded-sm flex items-start justify-between'>
                        <h1 className='capitalize'>Welcome Back {auth.user.name}!!</h1>
                    </div>
                   
                </div>
        </MainLayout>
    );
}
