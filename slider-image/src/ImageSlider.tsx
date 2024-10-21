
import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
    images: string[];
    delay?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, delay = 2000 }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, delay); // 3. Use the user-provided delay

        // 4. Cleanup interval on unmount
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [delay, currentIndex]);

    return (
        <div
            className="relative h-[30vh] w-[100vw] sm:h-[50vh] my-4"
        >
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                className="w-full h-full object-cover"
            />
            <button
                onClick={prevSlide}
                className="absolute h-full left-0 top-0 transform opacity-20 text-2xl flex items-center justify-center font-extrabold w-10 rounded-none cursor-pointer"
            >
                {'<'}
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 h-full top-0 transform opacity-20 text-2xl flex items-center justify-center  font-extrabold w-10 rounded-none cursor-pointer"
            >
                {'>'}        </button>
        </div>
    );
};



export default ImageSlider;
