import TextField from "../components/TextField";
import { useState } from 'react';

export default function Contact() {

    return (    
        <div>

            <section className="min-h-[60vh] bg-blue-400 relative pt-16 pb-16 flex justify-center items-center">
                <div className="flex flex-col justify-center items-center min-h-[60vh] gap-12">
                    <h1>Contact Us</h1>
                    <p className="text-[24px] text-center text-blue-900 font-[600] max-w-[50%]">
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
                <div className="flex justify-center items-center">
                    <h2>General Inquiries: </h2>
                    <p className="text-[56px] ml-4"> info@xtremel.com</p>
                </div>
                <form className="w-[50%]">
                    <div className="flex justify-center items-center gap-10">
                        <TextField name="ffname" value="First Name"/>
                        <TextField name="flname" value="Last Name"/>
                    </div>
                    <TextField value="Email Address"/>
                    <TextField value="Subject"/>
                    <textarea placeholder="Message"></textarea>
                </form>

            </section>
        </div>
    )
}