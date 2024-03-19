import { Link } from '@inertiajs/react';

export default function NavLink({ className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none '  +
                className
            }
        >
            {children}
        </Link>
    );
}
