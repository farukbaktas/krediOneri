
import React, { useState } from "react";

function Galery({ children }) {

const [activeIndex, setActiveIndex] = useState(0);

  const goToPrevSlide = () => {
    setActiveIndex(activeIndex - 1 < 0 ? children.length - 1 : activeIndex - 1);
  };

  const goToNextSlide = () => {
    setActiveIndex(activeIndex + 1 === children.length ? 0 : activeIndex + 1);
  };

    return (
        <section className="relative">

            {/* Section background (needs .relative class on parent and next sibling elements) */}
            <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
            <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
                <div className="pt-12 md:pt-20">

                    {/* Section header */}
                    <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                        <h1 className="h2 mb-4">Selam Naber</h1>
                        <p className="text-xl text-gray-600">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.</p>
                    </div>
                    <div className="relative w-full">
                    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                        <div className="duration-700 ease-in-out">
                            <img src="https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        <div className="hidden duration-700 ease-in-out">
                            <img src="https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        <div className="hidden duration-700 ease-in-out">
                            <img src="https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        <div className="hidden duration-700 ease-in-out">
                            <img src="https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                        <div className="hidden duration-700 ease-in-out">
                            <img src="https://cdn.discordapp.com/attachments/1171396831989739570/1182228492004376697/1_wTgpP45vRW4uIHCJDqNzGg.webp?ex=6583ef15&is=65717a15&hm=477cc0f6fab01cc002440c5ccea0100d9f148a02cc4322e1df08c68ec2d3f0ae&" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
                        </div>
                    </div>
                    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button class="w-3 h-3 rounded-full"></button>
                        <button class="w-3 h-3 rounded-full" ></button>
                        <button class="w-3 h-3 rounded-full"></button>
                        <button class="w-3 h-3 rounded-full" ></button>
                        <button class="w-3 h-3 rounded-full"></button>
                    </div>
                    <button onClick={goToPrevSlide} class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none">
                        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                            </svg>
                            <span class="sr-only">Previous</span>
                        </span>
                    </button>
                    <button onClick={goToNextSlide} class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" >
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