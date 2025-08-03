import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

export default function Footer() {
    return (
        <footer className="row-start-3 bg-blue-400 flex gap-[24px] min-h-12 text-white flex-wrap items-center justify-center">
            <p>&copy; 2025 Xtremel. All rights reserved.</p>
        </footer>
    )
}