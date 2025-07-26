export default function Button({ children, variant="light" }) {
    
    const base = `pl-4 pr-4 pt-2 pb-2 rounded-md font-bold text-[18px] border border-2 h-12`
    
    const variantStyles = {
        light: `bg-white text-blue-400  border-white   
    hover:bg-blue-400 hover:text-white `,
        dark: `bg-blue-900 text-white border-blue-900 hover:bg-blue-950 hover:border-blue-950`
    }

    return (
        <button className={`${base} ${variantStyles[variant]}`}>
            {children}
        </button>
    )
}