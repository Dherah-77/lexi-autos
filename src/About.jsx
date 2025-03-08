const About = () => {

    return (
        <section id="about" className="mx-auto w-[90%] flex flex-col md:flex-row md:justify-evenly">
            <section className=" fade-in1 mx-auto  mt-30 p-4 gap-8 shadow-2xl font-mono rounded-2xl text-2xl text-black bg-auto flex flex-col animate-[fade-in_linear]">
                <p>
                    Looking for reliable and affordable cars? <span className="text-blue-500 font-bold">Lexi-Autos got what you need!</span>. Wheather you want luxury, fuel sustainable, or power on the road. I offer the best deals and top quality vehicles, I sell both abroad used and and locally used vehicles at an unbeatable price. <span className="text-blue-500 font-bold">Get a reliable ride that fits your budget perfectly</span> and drive home with your dream car. Contact me today
                </p>
                <div className="container flex overflow-hidden flex-nowrap relative">
                    <div className=" scrool flex-row gap-4">
                        <img className="w-100 h-40" src="/Car19.jpeg" alt="Car Image" />
                        <img className="w-100 h-40" src="/Car18.jpeg" alt="Car Image" />
                        <img className="w-100 h-40" src="/Car13.jpeg" alt="Car Image" />
                        <img className="w-100 h-40" src="/Car20.jpeg" alt="Car Image" />
                        <img className="w-100 h-40" src="/Car3.jpeg" alt="Car Image" />
                    </div>
                </div>
            </section>
            <img className=" fade-in2 md:mt-60 mt-30 h-70 mx-auto" src="/random1.jpeg" alt="car-image" />
        </section>
    )
}

export default About;