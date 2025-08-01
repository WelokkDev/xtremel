export default function Timeline({}) {


    return (
        <div class="w-full py-16 bg-white">
              <div class="relative flex justify-between items-center max-w-[85%] mx-auto ">

                <div class="absolute top-1/2 left-0  h-1 w-full bg-[#51a2ff] transform -translate-y-1/2 z-0"></div>

                {[1, 2, 3, 4, 5].map((num) => (
                  <div
                    key={num}
                    class="relative z-10 w-10 h-10 flex items-center justify-center bg-[#51a2ff] text-white font-semibold text-lg rounded-lg shadow-md"
                  >
                    {num}
                  </div>
                ))}
                
              </div>
              <div className="relative flex justify-between items-center w-full mx-auto mt-6">
                  {[
                    {title: "Choose Your Plan", description: "Select the hosting package that fits your needs."},
                    {title: "Choose Your Domain", description: "Secure a new domain name or bring your own."},
                    {title: "Create Your Account", description: "Sign up with your email and password, fast, securely, and hassle-free."},
                    {title: "Make Payment", description: "Complete your order with secure payment and get access to client portal."},
                    {title: "Launch Your Website", description: "Log in to your dashboard, upload your content, and go live in minutes."},
                  ].map((step) => (
                    <div className="max-w-[18%] relative z-10  h-10 flex flex-col gap-1 ">
                      <h3 className="text-[20px] text-center">{step.title}</h3>
                      <p className="text-center text-gray-600">{step.description}</p>
                    </div>
                  ))}
                </div>
            </div>
    )
}