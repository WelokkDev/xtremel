import Image from "next/image";
import LandingPageHeading from "../components/LandingPageHeading";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import HeaderTag from "../components/HeaderTag";
import FeatureContainer from "../components/FeatureContainer";
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

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl w-full">
            {[
              {
                title: "Easy Setup.",
                description: "Launch your site in minutes. No tech expertise required. We’ll handle the backend so you can focus on what matters.",
                icon: (
                  <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m4 4V9a4 4 0 00-8 0v7" />
                  </svg>
                )
              },
              {
                title: "Fast Performance.",
                description: "Speed that keeps your visitors engaged. Our optimized servers deliver low-latency, high-efficiency performance every time.",
                icon: (
                  <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )
              },
              {
                title: "Personalized Support.",
                description: "You're not just a ticket number. Get support from real people who actually know your setup. It's fast, friendly, and tailored.",
                icon: (
                  <svg className="w-10 h-10 text-purple-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )
              },
              {
                title: "Free SSL & Backups.",
                description: "Security and peace of mind included. Every plan comes with free SSL certificates and automatic weekly backups.",
                icon: (
                  <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.105 0 2-.672 2-1.5S13.105 8 12 8s-2 .672-2 1.5S10.895 11 12 11z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v4m0 4h.01" />
                  </svg>
                )
              },
              {
                title: "Developer-Friendly Tools.",
                description: "Full access to cPanel, databases, staging environments, and more. Support for Node.js and Git. We have the power and flexibility for when you need it.",
                icon: (
                  <svg className="w-10 h-10 text-yellow-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                )
              },
              {
                title: "SSD Only.",
                description: "We don’t do slow. Every site runs on SSD storage for maximum speed, reliability, and modern performance.",
                icon: (
                  <svg className="w-10 h-10 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-1.414 1.414m0 0A9 9 0 105.636 18.364 9 9 0 0016.95 7.05z" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <FeatureContainer title={item.title} description={item.description} icon={item.icon} key={i}/>
            ))}
          </div>

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
