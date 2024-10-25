import React, { useState } from 'react';
import { countries } from './data/countries'; // Import your countries data

const CountrySelect: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleCountrySelect = (country: typeof countries[0]) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  return (
    <div className="relative w-80">
      <div
        className="flex items-center justify-between p-3 border rounded cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          <img
            src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
            alt={`${selectedCountry.name} flag`}
            width={30}
            className="mr-2"
          />
          <span>{selectedCountry.name} ({selectedCountry.phone})</span>
        </div>
        <span>{isOpen ? '▲' : '▼'}</span>
      </div>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full border rounded shadow-lg">
          {countries.map((country) => (
            <div
              key={country.code}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-900"
              onClick={() => handleCountrySelect(country)}
            >
              <img
                src={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png`}
                alt={`${country.name} flag`}
                width={30}
                className="mr-2"
              />
              <span>{country.name} ({country.phone})</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountrySelect;
