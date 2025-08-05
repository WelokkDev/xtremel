import { useRef, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductCarousel({}) {
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const [scrollX, setScrollX] = useState(0);

    const cardWidth = 300;
    const gap = 25;
    const cardPlusGap = cardWidth + gap;

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startX.current = e.pageX;
        scrollLeft.current = containerRef.current.scrollLeft;
        containerRef.current.style.scrollBehavior = "auto";
        document.body.style.userSelect = "none";
    };

    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const delta = startX.current - e.pageX;
        containerRef.current.scrollLeft = scrollLeft.current + delta;
        setScrollX(containerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        isDragging.current = false;
        document.body.style.userSelect = "auto";
    };

    const handleScroll = () => {
        if (containerRef.current) {
        setScrollX(containerRef.current.scrollLeft);
        }
    };

    const productData = [
        {
            title: "Starter", 
            prices: {starting: "$2.99", renewing: "$11.99", saving: "67%", original: "$16.99"},
            details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"]
        },
        {
            title: "Growth", 
            prices: {starting: "$2.99", renewing: "$11.99", saving: "67%", original: "$16.99"},
            details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"]
        },
        {
            title: "Business", 
            prices: {starting: "$2.99", renewing: "$11.99", saving: "67%", original: "$16.99"},
            details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"]
        },
        {
            title: "Pro", 
            prices: {starting: "$2.99", renewing: "$11.99", saving: "67%", original: "$16.99"},
            details: ["1 Website", "100GB SSD Storage", "Unmetered Bandwidth", "Free Email + Free Domain", "Free SSL" , "~20,000 Monthly Visitors", "Developer Support: Python, Node.js, Ruby, Git", "Built-in Security: Malware & DDoS Protection, WAF", "90-Day Money-Back Guarantee", "Live Chat Support"]
        }
    ]

    return (
        <div className="relative w-full overflow-hidden ">
            <div className="absolute right-0 top-0 h-full w-24 pointer-events-none z-10"></div>

            <div
                ref={containerRef}
                className="flex gap-[25px] overflow-x-scroll py-6 no-scrollbar cursor-grab"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onScroll={handleScroll}
            >
                <ProductCard data={productData[0]} mobile={true} />
                <ProductCard data={productData[1]} mobile={true}/>
                <ProductCard data={productData[2]} mobile={true}/>
                <ProductCard data={productData[3]} mobile={true}/>
            </div>
        </div>
    )
}