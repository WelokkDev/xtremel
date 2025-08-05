export default function Timeline({}) {


    return (
        <div className="w-full py-16 bg-white md:hidden">
            <div className="relative flex flex-col gap-12 max-w-[90%] mx-auto">

                {/* Vertical line */}
                <div className="absolute left-5 top-0 h-[91%] w-1 bg-[#51a2ff] z-0"></div>

                {[
                { title: "Choose Your Plan", description: "Select the hosting package that fits your needs." },
                { title: "Choose Your Domain", description: "Secure a new domain name or bring your own." },
                { title: "Create Your Account", description: "Sign up with your email and password, fast, securely, and hassle-free." },
                { title: "Make Payment", description: "Complete your order with secure payment and get access to client portal." },
                { title: "Launch Your Website", description: "Log in to your dashboard, upload your content, and go live in minutes." },
                ].map((step, i) => (
                <div key={i} className="relative flex items-start gap-4 z-10">
                    {/* Number bubble */}
                    <div className="relative z-10 min-w-[2.5rem] min-h-[2.5rem] px-2 flex items-center justify-center bg-[#51a2ff] text-white font-semibold text-lg rounded-lg shadow-md">
                    {i + 1}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                    <h3 className="text-[18px] font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                </div>
                ))}

            </div>
        </div>
    )
}