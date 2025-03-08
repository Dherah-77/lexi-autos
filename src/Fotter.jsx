import { Instagram, Twitter, MessageCircle, Facebook } from "lucide-react";

const Footer = () => {

    return (
        <footer className="text-blue-500 mt-8 w-full bg-[#333] h-auto font-mono">
            <div className="w-full flex flex-col md:flex-row justify-between p-8">
                <section className="flex flex-col gap-2 justify-center itesm-center">
                    <img src="/ftlogo.jpeg" alt="Logo-image" className="h-50 "/>
                    <div className="flex mt-6 animate-bounce justify-evenly">
                        <a href="https://wa.me/+2348055526350" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-10 h-10 text-green-500 hover:text-green-700" />
                        </a>
                        <a href="https://x.com/YOUR_HANDLE" target="_blank" rel="noopener noreferrer">
                        <Twitter className="w-10 h-10 text-blue-500 hover:text-gray-700" />
                        </a>
                        <a href="https://instagram.com/alexchima65" target="_blank" rel="noopener noreferrer">
                        <Instagram className="w-10 h-10 text-pink-500 hover:text-pink-700" />
                        </a>
                        <a href="https://facebook.com/ALEXCHIMANIGLTD" target="_blank" rel="noopener noreferrer">
                        <Facebook className="w-10 h-10 text-blue-600 hover:text-blue-800" />
                        </a>
                    </div>
                </section>
                <section id="contact" className="w-full mt-6 p-4 md:text-right">
                    <h2 className="font-bold text-xl">Contact Us</h2>
                    <hr  className="w-1/2 mt-4 md:ml-auto"/>
                    <h3>Address:</h3>
                    <address>
                        📍 KM6 Benin Sapele<br />
                        Sapele Road, Benin<br />
                        Edo State, Nigeria<br />
                    </address>
                    <hr  className="w-1/2 mt-4 md:ml-auto"/>
                    <h3>Phone:</h3>
                    <p>📞 +8055526350</p>
                    <p>📞 +8036061522</p>
                    <hr  className="w-1/2 mt-4 md:ml-auto"/>
                    <h3>Email</h3>
                    <p><a href="mailto:example@email.com"> ✉️Alexchima65@gmail.com</a></p>
                    <p><a href="mailto:example@hotmail.com"> ✉️Alexchima65@hotmail.com</a></p>
                </section>
            </div>
            <section className="w-full text-center bg-[#333] h-auto mt-6 p-6">
                <hr className="w-full bg-blue-500"/>
                <p>
                    Lexi-Autos, all rights reserved
                </p>
            </section>
        </footer>
    )
}

export default Footer;