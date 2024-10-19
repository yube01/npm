
import React, { useState } from 'react';

interface ImageSliderProps {
    images: string[];
    width?: string;
    height?: string;
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, width = '600px', height = '300px' }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div style={{ position: 'relative', width, height }}>
            <img
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <button onClick={prevSlide} >
                Previous
            </button>
            <button onClick={nextSlide}>
                Next
            </button>
        </div>
    );
};



export default ImageSlider;
