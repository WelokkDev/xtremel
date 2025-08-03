export default function TextField({ children, onChange, className = '', name="", type = "text", value }) {

    const base = "border border-gray-300 rounded-md px-2 py-2 focus:border-[#FFD97D] focus:border-2 focus:outline-none w-full"

    return (
        <input value={value} name={name} type={type} onChange={onChange} placeholder={children} className={`${base} ${className}`} ></input>
    )

}