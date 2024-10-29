// CountryPhoneCode.tsx
import React, { useEffect, useRef, useState } from 'react';
import { countries } from './data/countries'; // Import your countries data

interface Country {
  code: string;
  name: string;
  phone: string;

}

interface CountryPhoneCodeProps {
  onSelectCountry: (country: Country) => void; // Callback to pass selected country data
  phoneNumber: string;
  onPhoneNumberChange: (phone: string) => void;
}

const CountryPhoneCode: React.FC<CountryPhoneCodeProps> = ({ onSelectCountry, phoneNumber, onPhoneNumberChange }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [isOpen, setIsOpen] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);



  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    onSelectCountry(country); // Call the callback function with selected data
    setIsOpen(false);
  };


  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().startsWith(searchTerm.toLowerCase()) || country.code.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    // Allow only digits and ensure the length is at most 10
    if (/^\d{0,10}$/.test(input)) {
      onPhoneNumberChange(input); // Update parent state dynamically
    }
  };

  // Focus the input field when the dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div className="relative">
      <div>
        <div
          className="flex items-center justify-between p-1 rounded cursor-pointer gap-5"
        >
          <div onClick={() => setIsOpen(!isOpen)} className=' border flex justify-center items-center p-2 h-14 rounded-md'>
            <div className="flex items-center w-60">
              <img
                src={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png`}
                alt={`${selectedCountry.name} flag`}
                width={30}
                className="mr-2"
              />
              <span>{selectedCountry.name}</span>
            </div>
            <span>{isOpen ? '▲' : '▼'}</span>
          </div>


          <div className=' flex items-center border p-2 h-14 rounded-md'>
            <span className=' w-32'>({selectedCountry.phone})</span>
            <input

              type="text"
              value={phoneNumber}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              className="w-full p-1 bg-transparent outline-none"
            />

          </div>
        </div>

        {isOpen && (
          <div className="absolute z-10 mt-1 w-72 border rounded shadow-lg h-80 overflow-y-scroll bg-black">
            {/* Search Input */}
            <div className="p-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search country"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Update search term
                className="w-full p-2 border rounded bg-transparent text-white outline-none"
              />
            </div>

            {/* Filtered Country List */}
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
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
              ))
            ) : (
              <div className="p-2 text-gray-500">No matching countries found</div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default CountryPhoneCode;
