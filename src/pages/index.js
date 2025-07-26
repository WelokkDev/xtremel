import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const productData = [
  {
    title: "CORE", 
    prices: {starting: "$2.99", renewing: "$11.99"},
    details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"

    ]
  }
]

export default function Home() {
  return (
    <div>
        <section className="min-h-[60vh] bg-blue-400 relative pt-16 pb-16 flex justify-center items-center">


          <div className="flex flex-col justify-center items-center min-h-[60vh] gap-12">
            <h1 className="text-center z-100">Affordable Web Hosting,<br></br>Made Easy.</h1>
            <p className="text-[24px] text-center text-blue-900 font-[600] max-w-[45%]">
              Offering safe, secure, and seamless hosting that just works—so you can focus on building, creating, and growing, while we handle the rest.
            </p>
            <Button>View Hosting Options</Button>
          </div>
          <div class="custom-shape-divider-bottom-1753373327">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
            </svg>
          </div>
        </section>
        <section className="w-[100dvw] mt-16">
          <div className="flex w-full justify-evenly">
            <ProductCard data={productData[0]} />
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
          </div>
        </section>

    </div>
  );
}
