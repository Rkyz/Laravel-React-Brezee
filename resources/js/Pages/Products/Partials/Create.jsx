import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';



export default function Create({ auth }) {


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
                    <div className='p-[15px] bg-white capitalize font-bold'>
                        <p>add product</p>
                    </div>
                  <div className='bg-white p-[15px] rounded-sm'>
                    <form action="" className='flex flex-col gap-[15px]'>
                        <div className='flex flex-col'>
                            <InputLabel htmlFor="" className='font-bold capitalize'>nama produk</InputLabel>
                            <TextInput type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel htmlFor="" className='font-bold capitalize'>gambar produk</InputLabel>
                            <TextInput type="file" className="border file:bg-gray-300 file:text-gray-500 file:border-none file:p-[10px] file:rounded-l-sm file:mr-[10px] text-[14px] font-bold file:text-[14px]" />
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel htmlFor="" className='font-bold capitalize'>harga</InputLabel>
                            <TextInput type="number" />
                        </div>
                        <div className='flex flex-col'>
                            <InputLabel htmlFor="" className='font-bold capitalize'>stok</InputLabel>
                            <TextInput type="number" />
                        </div>
                        <button className='w-full mt-[10px] bg-red-500 text-white font-bold capitalize p-[10px] rounded-md'>submit</button>
                    </form>
                  </div>
                </div>
        </MainLayout>
    );
}
