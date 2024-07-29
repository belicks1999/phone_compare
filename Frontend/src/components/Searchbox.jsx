import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchBox = ({ onSelectPhone1, onSelectPhone2, initialPhone1, initialPhone2 }) => {
  const [phones, setPhones] = useState([]);
  const [filteredPhones1, setFilteredPhones1] = useState([]);
  const [filteredPhones2, setFilteredPhones2] = useState([]);
  const [searchLetter1, setSearchLetter1] = useState('');
  const [searchLetter2, setSearchLetter2] = useState('');
  const [showDropdown1, setShowDropdown1] = useState(true);
  const [showDropdown2, setShowDropdown2] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/phones/');
        if (response.data) {
          setPhones(response.data);
          // Set default phones if provided
          if (initialPhone1) onSelectPhone1(initialPhone1);
          if (initialPhone2) onSelectPhone2(initialPhone2);
        }
      } catch (error) {
        console.error('Error fetching phone data:', error);
      }
    };

    fetchPhones();
  }, [initialPhone1, initialPhone2, onSelectPhone1, onSelectPhone2]);

  useEffect(() => {
    if (searchLetter1) {
      const filtered = phones.filter(phone => phone.name.toUpperCase().startsWith(searchLetter1));
      setFilteredPhones1(filtered);
    } else {
      setFilteredPhones1([]);
    }
  }, [searchLetter1, phones]);

  useEffect(() => {
    if (searchLetter2) {
      const filtered = phones.filter(phone => phone.name.toUpperCase().startsWith(searchLetter2));
      setFilteredPhones2(filtered);
    } else {
      setFilteredPhones2([]);
    }
  }, [searchLetter2, phones]);

  const handleSelectPhone1 = (phone) => {
    onSelectPhone1(phone);
    setSearchLetter1(phone.name);
    setShowDropdown1(false);
  };

  const handleSelectPhone2 = (phone) => {
    onSelectPhone2(phone);
    setSearchLetter2(phone.name);
    setShowDropdown2(false);
  };

  return (
    <div className="relative flex w-[820px] justify-center items-center bg-white p-2">
      <div className='w-2/6'></div>
      {/* Search Box 1 */}
      <div className="flex w-2/6 flex-col mr-4 text-start relative">
        <label className="mb-2 text-xs font-serif font-bold">COMPARE WITH</label>
        <input
          type="text"
          className="px-1 w-full outline outline-1"
          placeholder="Search"
          value={searchLetter1}
          onChange={(e) => {
            setSearchLetter1(e.target.value.toUpperCase());
            setShowDropdown1(true); // Show dropdown when typing
          }}
          onFocus={() => setShowDropdown1(true)} // Show dropdown when focused
          onBlur={() => setTimeout(() => setShowDropdown1(false), 200)} // Hide dropdown after losing focus
        />
        {showDropdown1 && filteredPhones1.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 z-10 shadow-lg">
            {filteredPhones1.map(phone => (
              <li
                key={phone._id}
                onClick={() => handleSelectPhone1(phone)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {phone.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search Box 2 */}
      <div className="flex w-2/6 flex-col ml-4 text-start relative">
        <label className="mb-2 text-xs font-serif font-bold">COMPARE WITH</label>
        <input
          type="text"
          className="px-1 w-full outline outline-1"
          placeholder="Search"
          value={searchLetter2}
          onChange={(e) => {
            setSearchLetter2(e.target.value.toUpperCase());
            setShowDropdown2(true); // Show dropdown when typing
          }}
          onFocus={() => setShowDropdown2(true)} // Show dropdown when focused
          onBlur={() => setTimeout(() => setShowDropdown2(false), 200)} // Hide dropdown after losing focus
        />
        {showDropdown2 && filteredPhones2.length > 0 && (
          <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 z-10 shadow-lg">
            {filteredPhones2.map(phone => (
              <li
                key={phone._id}
                onClick={() => handleSelectPhone2(phone)}
                className="cursor-pointer p-2 hover:bg-gray-200"
              >
                {phone.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBox;
