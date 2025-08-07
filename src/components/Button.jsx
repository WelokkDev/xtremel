export default function Button({ children, variant="light", path=""}) {
    
    const base = `pl-4 pr-4 pt-2 pb-2 rounded-md font-bold text-[18px] border border-2 h-12 text-center`
    
    const variantStyles = {
        light: `bg-white text-blue-400  border-white   
    transition duration-200 ease-in-out transform hover:translate-x-1`,
        blue: `bg-blue-400 text-white border-blue-400 transition duration-200 ease-in-out transform hover:translate-x-1 `,
        dark: `bg-blue-900 text-white border-blue-900 hover:bg-blue-950 hover:border-blue-950`
    }

    return (
        <a className={`${base} ${variantStyles[variant]}`} href={path}>
            {children}
        </a>
    )
}