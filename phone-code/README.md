
import { CountryPhoneCode } from 'country-phone-code-yube';

import React, { useState } from 'react';


interface CountryData {
    code: string;
    name: string;
    phone: string;
  }

const App: React.FC = () => {

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
