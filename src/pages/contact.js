import TextField from "../components/TextField";
import Button from "../components/Button"

export default function Contact() {

    return (    
        <div>

            <section className="min-h-[60vh] bg-blue-400 relative pt-16 pb-16 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center min-h-[60vh] gap-12">
                    <h1>Contact Us</h1>
                    <p className="text-[24px] text-center text-blue-900 font-[600] max-w-[50%] max-w-[45%] max-xl:text-[16px] max-xl:max-w-[85%]">
                        We're here to make things easy. Whether you're ready to launch your next project, 
                        have questions about our plans, or just want to explore what's possible, we’re happy to help. 
                        Reach out through the form below and our team will get back to you promptly.
                    </p>

                </div>
                <div class="custom-shape-divider-bottom-1753663138">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
            <section className="flex justify-center items-center flex-col mt-[5%] mb-[5%]">
                <div className="flex flex-col justify-center items-center max-w-max">
                    <h2 className="!text-blue-400 text-center max-lg:!pb-2">
                        General Inquiries: <span className="text-black">info@xtremel.com</span>
                    </h2>
                    
                
                <form  method="POST" action="/contact-form.php" className=" flex flex-col gap-4 lg:mt-8 w-[100%] max-lg:p-4">
                    <div className="flex justify-center items-center gap-6">
                        <TextField name="ffname" >
                            First Name
                        </TextField>
                        <TextField name="flname">
                            Last Name
                        </TextField>
                    </div>
                    <TextField name="email" >
                        Email Address
                    </TextField>
                    <TextField name="subject">
                        Subject
                    </TextField>
                    <textarea rows={4} placeholder="Message"
                        className={`border border-2 border-gray-300 rounded-md px-2 py-2 text-[24px]
                        focus:border-blue-400 focus:border-2 focus:outline-none w-full max-lg:text-[16px]`}>
                    </textarea>
                    <Button variant="blue">Submit</Button>
                </form>
                </div>
            </section>
        </div>
    )
}