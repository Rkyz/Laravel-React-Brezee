export default function SecondaryButton({ type = 'button', className = '', disabled, children, ...props }) {
    return (
        <button
            {...props}
            type={type}
            className={
                `inline-flex items-center px-4 py-2 bg-white idk:bg-gray-800 border border-gray-300 idk:border-gray-500 rounded-md font-semibold text-xs text-gray-700 idk:text-gray-300 uppercase tracking-widest shadow-sm hover:bg-gray-50 idk:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 idk:focus:ring-offset-gray-800 disabled:opacity-25 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}
