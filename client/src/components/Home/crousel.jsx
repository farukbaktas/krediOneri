import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://media.discordapp.net/attachments/1171396831989739570/1245982541975130162/brands.jpg?ex=665abb2b&is=665969ab&hm=955167e62e701c53f15776d5f2ea1b7bbc99c40ec7dbc2a1a0b07ca4ecad531a&=&format=webp&width=2268&height=1064",
        "https://media.discordapp.net/attachments/1171396831989739570/1241988482172325898/target.jpg?ex=665ab3e9&is=66596269&hm=55ae7572abe760e528bea89d52f1bda2402950465ffa569287379b335d5035e9&=&format=webp&width=1100&height=516",
        "https://media.discordapp.net/attachments/1171396831989739570/1240904415842668618/meme.jpg?ex=665ab6cb&is=6659654b&hm=dab128fd18f6743cc180b164b8b95b4172496ef791f739a735b9e9ab89c89003&=&format=webp&width=2268&height=1064",
        "https://media.discordapp.net/attachments/1171396831989739570/1237641008926429224/KOL.jpg?ex=665ab502&is=66596382&hm=890a2667504941073a85f107bf8adb57cee3a1223e1b2a9e7d017e30f56f6ffb&=&format=webp&width=1100&height=516",

    ];

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const interval = setInterval(handleNext, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                    <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} data-carousel-item>
                        <img src={slide} className="block w-full h-full object-cover" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
                        aria-current={index === currentSlide}
                        aria-label={`Slide ${index + 1}`}
                        data-carousel-slide-to={index}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrev}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNext}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

export default Carousel;
