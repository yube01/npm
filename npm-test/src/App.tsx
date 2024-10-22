// src/App.tsx


import { ImageSlider } from 'image-slider-yube';
import React from 'react';


const App: React.FC = () => {
    const images = [
        'https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1',
        'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Image+2',
        'https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Image+3'

    ];

    return (
        <div>
            <h1>My Image Slider</h1>
            <ImageSlider images={images} />
        </div>
    );
};

export default App;
