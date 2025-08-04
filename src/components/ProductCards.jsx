import Button from "./Button";
export default function ProductCard({ data }) {
    return (
        <div className="w-[20vw] flex flex-col gap-4 bg-blue-400">
                <div className="flex flex-col pl-12 pr-12 pt-8 pb-8">
                    <h3 className="text-[26px] text-white">{data.title}</h3>
                    <p className="text-left text-white text-[18px] mt-8">
                        <span className="bg-yellow-200 text-black text-[14px] px-[5.5px] font-[500]">SAVE {data.prices.saving}</span>
                        <span className="text-[14px] line-through ml-2">{data.prices.original}</span>
                    </p>
                    <p className="mt-2 mb-4 text-fancy-shadow text-left font-black text-white text-[40px] xl:text-4xl 2xl:text-[53px]">
                        {data.prices.starting}/mo
                    </p>
                    <Button variant="dark">Buy Now</Button>
                </div>
                <div className="pr-12 pl-12 ">
                    {data.details.map((detail) => (
                        <p key={detail} className="text-left text-[14px] font-medium text-white py-2">
                            {detail}
                        </p>
                    ))}
                </div>
        </div>
    )
}