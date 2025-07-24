export default function Button({ children }) {
    const whiteVariant = `bg-white text-blue-400 pl-4 pr-4 pt-2 pb-2 rounded-md font-bold text-[18px] border border-white border-2  
    hover:bg-blue-400 hover:text-white  `

    return (
        <button className={whiteVariant}>
            {children}
        </button>
    )
}