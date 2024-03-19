import { Link } from '@inertiajs/react';

export default function ResponsiveNavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${
                active
                    ? 'border-indigo-400 idk:border-indigo-600 text-indigo-700 idk:text-indigo-300 bg-indigo-50 idk:bg-indigo-900/50 focus:text-indigo-800 idk:focus:text-indigo-200 focus:bg-indigo-100 idk:focus:bg-indigo-900 focus:border-indigo-700 idk:focus:border-indigo-300'
                    : 'border-transparent text-gray-600 idk:text-gray-400 hover:text-gray-800 idk:hover:text-gray-200 hover:bg-gray-50 idk:hover:bg-gray-700 hover:border-gray-300 idk:hover:border-gray-600 focus:text-gray-800 idk:focus:text-gray-200 focus:bg-gray-50 idk:focus:bg-gray-700 focus:border-gray-300 idk:focus:border-gray-600'
            } text-base font-medium focus:outline-none transition duration-150 ease-in-out ${className}`}
        >
            {children}
        </Link>
    );
}
