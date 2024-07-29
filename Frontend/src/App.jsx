import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBox from './components/Searchbox';
import PhoneCard from './components/PhoneCard';

function App() {
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);
  const [initialPhones, setInitialPhones] = useState({ phone1: null, phone2: null });

  useEffect(() => {
    const fetchInitialPhones = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/phones/');
        if (response.data && response.data.length >= 2) {
          setInitialPhones({
            phone1: response.data[0],
            phone2: response.data[1]
          });
        }
      } catch (error) {
        console.error('Error fetching initial phone data:', error);
      }
    };

    fetchInitialPhones();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-start items-center pt-10 pb-10">
      <SearchBox
        onSelectPhone1={setPhone1}
        onSelectPhone2={setPhone2}
        initialPhone1={initialPhones.phone1}
        initialPhone2={initialPhones.phone2}
      />
      {phone1 && phone2 && <PhoneCard phone1={phone1} phone2={phone2} />}
    </div>
  );
}

export default App;
