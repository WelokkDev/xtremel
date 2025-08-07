import Button from "../components/Button"

export default function Contact() {

    return (    
        <div className="bg-blue-400 flex flex-col items-center justify-center h-[100dvh] w-full gap-12">
            <h1 className="text-white">Thank you!</h1>
            <p className="text-white text-[20px] text-center px-4">Your message has been sent. We will get back to you shortly.</p>
            <Button path="/">Go Back Home</Button>
        </div>
    )
}