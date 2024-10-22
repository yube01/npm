
import React, { useEffect, useState } from 'react';

interface ImageSliderProps {
    images: string[];
    delay?: number;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, delay = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
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
            <div className="relative h-full w-full overflow-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-transform duration-700 ease-in-out ${index === currentIndex
                                ? 'translate-x-0'
                                : index < currentIndex
                                    ? '-translate-x-0'
                                    : 'translate-x-full'
                            }`}
                    />
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute bg-black h-full left-0 top-0 p-4 transition-transform duration-700 ease-in-out opacity-10 text-2xl flex items-center justify-center font-extrabold w-6 rounded-none cursor-pointer"
            >
                {'<'}
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-0 bg-black h-full top-0 p-4 transition-transform duration-700 ease-in-out opacity-10 text-2xl flex items-center justify-center  font-extrabold w-6 rounded-none cursor-pointer"
            >
                {'>'}        </button>

            <div className="absolute bottom-2 left-0 w-full flex justify-center gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={` w-3 h-3 opacity-70 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-400'
                            } hover:bg-yellow-100 transition-all duration-300`}
                    />
                ))}
            </div>

        </div>
    );
};



export default ImageSlider;
