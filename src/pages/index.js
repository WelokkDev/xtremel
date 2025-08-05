import Image from "next/image";
import LandingPageHeading from "../components/LandingPageHeading";
import Button from "../components/Button";
import HeaderTag from "../components/HeaderTag";
import FeatureGrid from "../components/FeatureGrid";
import ProductGrid from "../components/ProductGrid";
import ProductCarousel from "../components/ProductCarousel"
import Timeline from "../components/Timeline";
import MobileTimeline from "../components/MobileTimeline";

import { useEffect, useState } from "react";




export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const docWidth = document.documentElement.offsetWidth;
    [...document.querySelectorAll('*')].forEach(el => {
      if (el.offsetWidth > docWidth) {
        console.log('Wide element:', el, el.offsetWidth);
      }
    });

    const checkMobile = () => {
      if (typeof window !== "undefined") {
        const width = window.innerWidth;
        setIsMobile(width <= 1000); 
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);

  }, []);

  return (
    <div >
        <section className="min-h-[60vh] bg-blue-400 relative pt-16 pb-16 flex justify-center items-center">


          <div className="flex flex-col justify-center items-center min-h-[60vh] gap-12">
            <LandingPageHeading/>
            <p className="text-[24px] text-center text-blue-900 font-[600] max-w-[45%] max-xl:text-[16px] max-xl:max-w-[85%]">
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

        <section className="pl-[5%] pr-[5%] pt-[10%] flex justify-center items-center flex-col mobile-section">
          <HeaderTag variant="color">HOSTING PLAN</HeaderTag>
          <h2 className="text-center mr-auto ml-auto max-w-[650px] z-100 p-4 pb-16">Find the Right <span className="text-blue-400">Hosting Plan</span> for You</h2>
          { isMobile ? <ProductCarousel/> : <ProductGrid/>}
          
        </section>

        <section className="pl-[5%] pr-[5%] pt-[10%] pb-[10%] mobile-section">
          <div className="flex flex-col justify-center items-center">
            <HeaderTag variant="color">STEPS</HeaderTag>
            <h2 className="text-center z-100 p-4 pb-16">
              How it Works
            </h2>
            { isMobile ? <MobileTimeline /> : <Timeline />}
          </div>
        </section>

    </div>
  );
}
