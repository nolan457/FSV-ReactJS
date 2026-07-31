function Button({type = 'button', label = 'Click me', OnClick, className = 'bg-blue-500 text-white py-2 px-4 rounded', style= {}}) {
    return (
        <button type={type} onClick={OnClick} className={className} style={style}>
            {label}
        </button>
    );
}

export default Button;