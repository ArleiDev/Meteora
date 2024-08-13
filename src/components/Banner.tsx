// src/components/CarouselBanner.jsx
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: '/bannerm1.png', alt: 'Imagem 1', width: 1440, height: 415 },
    { src: '/bannerm2.png', alt: 'Imagem 2', width: 1440, height: 415 },
    { src: '/bannerm3.png', alt: 'Imagem 3', width: 1440, height: 415 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Muda de imagem a cada 5 segundos

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full overflow-hidden ">
      <div
        className="mt-14 flex transition-transform duration-500 ease-in-out " 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={image.src}
              alt={image.alt}
              layout="responsive"
              width={image.width}
              height={image.height}
             
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-4">
      <IoMdArrowDropleft onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)} color="white" size={60} />
        <IoMdArrowDropright onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)} color="white" size={60} />
      </div>
    </div>
  );
};

export default Banner;

//  onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}