import Image from "next/image";
import LandingPageHeading from "../components/LandingPageHeading";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import HeaderTag from "../components/HeaderTag";
import FeatureContainer from "../components/FeatureContainer";
import FeatureGrid from "../components/FeatureGrid";
import Timeline from "../components/Timeline";


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
            <LandingPageHeading/>
            <p className="text-[24px] text-center text-blue-900 font-[600] max-w-[45%]">
              Offering safe, secure, and seamless hosting that just works—so you can focus on building, creating, and growing, while we handle the rest.
            </p>
            <Button>View Hosting Options</Button>

          </div>
          <div class="custom-shape-divider-bottom-1753663138">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
              </svg>
          </div>
        </section>
        <section className="pl-[5%] pr-[5%] pt-[5%]">
          <div className="flex justify-center items-center flex-col">
            <HeaderTag variant="color">FEATURES</HeaderTag>
            <h2 className="text-center z-100 p-4 pb-16">
              Why We're Worth It

            </h2>
            <FeatureGrid/>
          
          </div>
          
        </section>

        <section className="pl-[5%] pr-[5%] pt-[10%] flex justify-center items-center flex-col">
          <HeaderTag variant="color">HOSTING PLAN</HeaderTag>
          <h2 className="text-center mr-auto ml-auto max-w-[650px] z-100 p-4 pb-16">Find the Right <span className="text-blue-400">Hosting Plan</span> for You</h2>
          <div className="flex w-full justify-evenly">
            <ProductCard data={productData[0]} />
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
            <ProductCard data={productData[0]}/>
          </div>
        </section>

        <section className="pl-[5%] pr-[5%] pt-[10%] pb-[10%]">
          <div className="flex flex-col justify-center items-center">
            <HeaderTag variant="color">HOSTING PLAN</HeaderTag>
            <h2 className="text-center z-100 p-4 pb-16">
              How it Works

            </h2>
            
            <Timeline />
            



          </div>
        </section>

    </div>
  );
}
