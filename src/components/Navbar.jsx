import Link from "next/link";
import { useRouter } from "next/router"



export default function Navbar() {
    const router = useRouter();

    return (
        <nav className="flex items-center justify-between bg-white h-[64px]">
            <Link className="w-32 " href="/"><img src="/logo.png"></img></Link>
            <ul className="flex justify-right gap-8 mr-12">
                <li key="contact">
                    <Link href="/">Contact</Link>
                </li>
                <li key="account">
                    <Link href="/">Account</Link>
                </li>
            </ul>
        </nav>
    )
}