
import ProductCard from "./ProductCards";

export default function ProductGrid() {

    const productData = [
        {
            title: "Starter", 
            prices: {starting: "$2.99", renewing: "$11.99", saving: "67%", original: "$16.99"},
            details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"

            ]
        }
    ]

    return (
          <div className="flex w-[95%] justify-evenly bg-blue-400">
            <ProductCard data={productData[0]} />
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
          </div>
    )
}