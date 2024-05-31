
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

        </section >
    );
}

export default Galery;