export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded idk:bg-gray-900 border-gray-300 idk:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 idk:focus:ring-indigo-600 idk:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
