import Button from "./Button";
export default function ProductCard({ data }) {
    return (
        <div className="w-[20vw] flex flex-col gap-4">
            <div className="bg-blue-900 min-h-14 rounded-md flex items-center justify-center">
                <h3 className="text-[24px]">{data.title}</h3>
            </div>
            <div className="bg-blue-400 min-h-[20vh] rounded-md">
                <div className="flex flex-col pl-12 pr-12 pt-8 pb-8">
                    <p className="text-center text-[18px]">Starting at</p>
                    <p className="text-center font-black text-white text-[53px]">{data.prices.starting}/mo</p>
                    <p className="text-center text-[18px] mb-4">Renews at {data.prices.renewing}/mo</p>
                    <Button variant="dark">Select</Button>
                </div>
                <div className="mb-8 border-b ">
                    {data.details.map((detail) => (
                        <p className="text-center text-[14px] font-medium text-white border-t border-blue-950 py-2">
                            {detail}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    )
}