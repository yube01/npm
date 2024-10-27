
import React, { useState } from 'react';
import CountryPhoneCode from './phone-code';

// import Trusted from './image-coursol';

interface CountryData {
    code: string;
    name: string;
    phone: string;
  }


const App: React.FC = () => {
    // const images = [
    //     'https://via.placeholder.com/600x300/FF5733/FFFFFF?text=Image+1',
    //     'https://via.placeholder.com/600x300/33FF57/FFFFFF?text=Image+2',
    //     'https://via.placeholder.com/600x300/3357FF/FFFFFF?text=Image+3'

    // ];
  
    const [selectedCountry, setSelectedCountry] = useState<CountryData | null>(null);

    const handleCountrySelection = (country: CountryData) => {
      console.log('Selected Country:', country);
      setSelectedCountry(country); // Store selected country data if needed
    };



    return (
        <div className="p-5">
        <h1 className="text-2xl mb-4">Select a Country</h1>
        <CountryPhoneCode onSelectCountry={handleCountrySelection} />
        
        {selectedCountry && (
          <div className="mt-4">
            <h2>Selected Country Details:</h2>
            <p>Country: {selectedCountry.name}</p>
            <p>Phone Code: {selectedCountry.phone}</p>
          </div>
        )}
      </div>
    );
};

export default App;
