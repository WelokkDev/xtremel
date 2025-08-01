
import ProductCard from "./ProductCard";

export default function ProductGrid() {

    const productData = [
        {
            title: "CORE", 
            prices: {starting: "$2.99", renewing: "$11.99"},
            details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"

            ]
        }
    ]

    return (
          <div className="flex w-full justify-evenly">
            <ProductCard data={productData[0]} />
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
          </div>
    )
}