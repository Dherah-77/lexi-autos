import { useState } from "react";
import Prodtexts from "./Prodtexts";

const Products = () => {
    const [isProdVisible, setIsProdVisible] = useState(false)

    return (
        <div id="products" className="p-8">
            <section id="Products" className="animate-fade-in3 mx-auto w-1/2 mt-30 h-20 p-4 rounded-2xl flex justify-center align-middle  bg-blue-500 text-black">
                <h2 className="text-xl md:text-3xl font-bold mt-4">VIEW PRODUCTS </h2>
                <img src="/expand.png" alt="Open" className=" h-10 cursor-pointer" onClick={() => setIsProdVisible(true)}/>
            </section>

            {isProdVisible && (
                <section className="dropdown fade-in3 bg-amber-50 grid grid-cols-2 gap-3 md:grid-cols-3 h-[500px] overflow-auto p-6 rounded-3xl">
                <img className=" sticky top-0 z-5 h-10 bg-blue-500 rounded-4xl cursor-pointer" src="/close.png" alt="Close products" onClick={() => setIsProdVisible(false)} />

                {Array.from({ length: 21}).map((_, index) => (
                    <div key={index} className="fade-in3 w-1/2">
                        <img src={`/Car${index + 1}.jpeg`} alt={`/Car${index + 1}`} />
                    </div>
                ))}
            </section>
            )}

            <Prodtexts />

        </div>    
    )
}

export default Products;