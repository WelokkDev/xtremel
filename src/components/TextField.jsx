export default function TextField({ children, onChange, className = '', name="", type = "text", value }) {

    const base = `border border-2 border-gray-300 rounded-md px-2 py-2 text-[24px]
    focus:border-blue-400 focus:border-2 focus:outline-none w-full`

    return (
        <input value={value} name={name} type={type} onChange={onChange} placeholder={children} className={`${base} ${className}`} >
        </input>
    )

}