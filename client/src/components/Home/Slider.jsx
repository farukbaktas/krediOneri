
import React, { useState } from "react";

function Galery() {
    const images = [
        "https://cdn.discordapp.com/attachments/1171396831989739570/1181879048977272852/1_ZJer_ze2P6vAdghx8aNvMw.webp?ex=6582a9a3&is=657034a3&hm=49ec7bf0891c41ad3b0ee12884eee831349225a72cce702c80716e229ea18571&",
        "https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&",
        // Diğer resim URL'leri
    ];
    // Aktif resmi takip etmek için durum değişkeni
    const [activeImage, setActiveImage] = useState(0);

    // Önceki resme geçiş yapmak için fonksiyon
    const handlePrev = () => {
        setActiveImage(activeImage - 1 >= 0 ? activeImage - 1 : images.length - 1);
    };

    // Sonraki resme geçiş yapmak için fonksiyon
    const handleNext = () => {
        setActiveImage(activeImage + 1 < images.length ? activeImage + 1 : 0);
    };
    const renderImageButtons = () => {
        return images.map((_, index) => (
            <button key={index} onClick={() => selectImage(index)} className="w-3 h-3 rounded-full">
                { }
            </button>
        ));
    };
    return (
        <section className="relative">

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pb-20">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-8">
                        <h1 className="h2 font-semibold text-3xl mb-4">Selam Naber</h1>
                        <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </div>
                <div className="relative w-full ">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        {/* Aktif resmi göster */}
                        <img src={images[activeImage]} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Gallery"/>
                    </div>
                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {renderImageButtons()}

                    </div>
                    <button onClick={handlePrev} class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button onClick={handleNext} class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="sr-only">Next</span>
                        </span>
                    </button>
                </div>


                </div >
            </div >
        </section >
    );
}

export default Galery;