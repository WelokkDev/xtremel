import FeatureContainer from "../components/FeatureContainer";

export default function FeatureGrid() {
    return (
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
        
    )
}