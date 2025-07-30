export default function HeaderTag({ children, variant="dark" }) {
    const baseStyle = `  rounded-4xl w-fit text-[20px]`
    const variantStyle = variant === "dark" ? `pl-6 pr-6 pt-3 pb-3 border border-[#222222]` : 
    `button-color text-[#51a2ff] font-semibold pl-4 pr-4 pt-1 pb-1`
    return (
        <div className={`${baseStyle} ${variantStyle}`}>
            {children}
        </div>
    )
}