import React from "react";

interface TrustedProps {
  images: string[];
}

const Trusted: React.FC<TrustedProps> = ({ images }) => {
  return (
    <div className="flex flex-col items-center space-y-8">
      {/* Wrapper for the scrolling images */}
      <div className="w-[1200px] overflow-hidden relative mask-gradient">
        <div className="flex space-x-8 animate-scrollX">
          {/* First set of images */}
          {images.map((el, index) => (
            <ImageGroup key={index}>
              <img src={el} alt={`Trusted-${index}`} className="image" />
            </ImageGroup>
          ))}

          {/* Duplicate set of images for seamless looping */}
          {images.map((el, index) => (
            <ImageGroup key={`copy-${index}`}>
              <img src={el} alt={`Trusted-copy-${index}`} className="image" />
            </ImageGroup>
          ))}
        </div>
      </div>
    </div>
  );
};

const ImageGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="grid place-items-center w-[clamp(10rem,1rem+40vmin,30rem)] p-[calc(clamp(10rem,1rem+30vmin,30rem)/10)]">
    {children}
  </div>
);

export default Trusted;
