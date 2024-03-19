export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-red-600 idk:text-red-400 ' + className}>
            {message}
        </p>
    ) : null;
}
