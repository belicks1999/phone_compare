import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import SearchBox from './components/Searchbox';
import PhoneCard from './components/PhoneCard';

function App() {
  // State to hold selected phones and initial phone data
  const [phone1, setPhone1] = useState(null);
  const [phone2, setPhone2] = useState(null);
  const [initialPhones, setInitialPhones] = useState({ phone1: null, phone2: null });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch initial phones from the server when the component mounts
  useEffect(() => {
    const fetchInitialPhones = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://phone-compare-backend.vercel.app/api/phones/');
        if (response.data && response.data.length >= 2) {
          // Set initial phones if at least two are available
          setInitialPhones({
            phone1: response.data[0],
            phone2: response.data[1]
          });
        }
      } catch (error) {
        setError('Error fetching initial phone data');
        console.error('Error fetching initial phone data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPhones();
  }, []);

  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-start items-center pt-10 pb-10">
      {/* Show loading message */}
      {loading && <div className="text-center text-gray-700">Loading...</div>}

      {/* Show error message if any */}
      {error && <div className="text-center text-red-500">{error}</div>}

      {/* SearchBox component for selecting phones */}
      {!loading && !error && (
        <SearchBox
          onSelectPhone1={setPhone1} // Function to set the first selected phone
          onSelectPhone2={setPhone2} // Function to set the second selected phone
          initialPhone1={initialPhones.phone1} // Initial phone for the first search box
          initialPhone2={initialPhones.phone2} // Initial phone for the second search box
        />
      )}

      {/* PhoneCard component displays details of selected phones if both are selected */}
      {phone1 && phone2 && <PhoneCard phone1={phone1} phone2={phone2} />}
    </div>
  );
}

export default App;
