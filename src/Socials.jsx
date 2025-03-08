import { Instagram, Twitter, MessageCircle, Facebook } from "lucide-react";
 
const Socials = () => {

    return (
        <main>
            <div className="flex justify-evenly items-center mt-6 space-x-4 animate-bounce w-full">
                <a href="https://wa.me/+2348055526350" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-10 h-10 text-green-500 hover:text-green-700" />
                </a>
                <a href="https://x.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
                <Twitter className="w-10 h-10 text-black hover:text-gray-700" />
                </a>
                <a href="https://instagram.com/alexchima65" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-10 h-10 text-pink-500 hover:text-pink-700" />
                </a>
                <a href="https://facebook.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
                <Facebook className="w-10 h-10 text-blue-600 hover:text-blue-800" />
                </a>
            </div>
        </main>    
    )
}

export default Socials;