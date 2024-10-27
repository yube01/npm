// CountryPhoneCode.tsx
import React, { useState } from 'react';
import { countries } from './data/countries'; // Import your countries data

interface Country {
  code: string;
  name: string;
  phone: string;
}

interface CountryPhoneCodeProps {
  onSelectCountry: (country: Country) => void; // Callback to pass selected country data
}

const CountryPhoneCode: React.FC<CountryPhoneCodeProps> = ({ onSelectCountry }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    onSelectCountry(country); // Call the callback function with selected data
    setIsOpen(false);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Ensure only numeric values are entered
    if (/^\d*$/.test(input)) {
      setPhoneNumber(input);
    }
  };

  return (
    <div className="relative">
      <div className=''>
        <div
          className="flex items-center justify-between p-1 border rounded cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <div className="flex items-center w-60">
              <img
                src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                alt={`${selectedCountry.name} flag`}
                width={30}
                className="mr-2"
              />
              <span>{selectedCountry.name}</span>
            </div>

          </div>
          <span>{isOpen ? '▲' : '▼'}</span>

          <div className=' flex items-center'>
          <span className=' w-32'>({selectedCountry.phone})</span>
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter phone number"
              className="w-full p-1 bg-transparent outline-none"
            />

          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-full border rounded shadow-lg h-80 overflow-y-scroll bg-black">
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
      {phoneNumber && (
        <div className="mt-4 text-sm">
          <p>
            <strong>Full Number:</strong>{' '}
            {selectedCountry?.phone} {phoneNumber}
          </p>
        </div>
      )}
    </div>
  );
};

export default CountryPhoneCode;
