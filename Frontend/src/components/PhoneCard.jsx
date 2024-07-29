import React, { useState } from 'react';
import CompareTable from './CompareTable';

// Import images
import iphone15 from '../assets/images/ip15.jpg';
import xiomo14 from '../assets/images/x14.jpg';
import s23 from '../assets/images/s23.jpg';
import s24 from '../assets/images/s24.jpg';
import op11 from '../assets/images/op11.jpg';
import oppo from '../assets/images/oppo.jpg';
import am from '../assets/images/am.jpeg';

// Map phone names to image imports
const phoneImages = {
  'Xiaomi 14': xiomo14,
  'iPhone 15': iphone15,
  'OnePlus 11': op11,
  'Oppo Find X6': oppo,
  'Samsung Galaxy S24 Ultra': s24,
  'Samsung Galaxy S23 Ultra': s23
};

function PhoneCard({ phone1, phone2 }) {
  const [showDifferences, setShowDifferences] = useState(false);

  const Toggle = () => {
    setShowDifferences(!showDifferences);
  };

  // Function to get image based on phone name
  const getPhoneImage = (phoneName) => {
    return phoneImages[phoneName] || null; // Return null if image is not found
  };

  return (
    <div>
      <div className="flex w-[820px] justify-center items-center bg-white p-2">
        <div className="flex w-2/6 flex-row mr-4 text-start">
          <div className="w-full flex mt-60 justify-center relative">
            <button
              className={`p-3 tracking-tighter text-white font-semibold mr-1 ${showDifferences ? 'bg-neutral-500' : 'bg-red-600'}`}
              onClick={() => setShowDifferences(false)}
            >
              FULL
            </button>
            <button
              className={`p-3 text-white tracking-tighter font-semibold pl-4 pr-2 ${showDifferences ? 'bg-red-600' : 'bg-neutral-500'}`}
              onClick={() => setShowDifferences(!showDifferences)}
            >
              DIFFERENCES
            </button>
            <button className='bg-white justify-center mt-3 mr-14 items-center absolute text-xs font-bold p-1 rounded-full' onClick={Toggle}>OR</button>
          </div>
        </div>

        <div className="flex w-2/6 flex-col text-start">
          <h1 className='mt-8 text-md font-bold font-serif mb-2 text-neutral-700'>
            {phone1.name}
          </h1>
          <div className="flex w-full">
            <div className='w-2/3'>
              <img className='w-36 mb-3' src={getPhoneImage(phone1.name)} alt={phone1.name} />
              <p className='text-sm text-neutral-600'>{phone1.storage} {phone1.ram} RAM</p>
              <div className='flex items-center'>
                <p className='text-sm mr-2 text-red-600 font-semibold'>${phone1.price}</p>
                <img className='w-14 mt-2' src={am} alt="Amazon Logo" />
              </div>
            </div>
            <div className='w-1/3 flex justify-center'>
              <div className='flex flex-col mr-3'>
                <h1 className='bg-black text-white cursor-pointer font-bold text-start px-2 py-2 w-26 mr-2 text-xs hover:bg-red-600 mb-1'>REVIEW</h1>
                <h1 className='bg-neutral-200 text-gray-700 font-semibold tracking-tighter px-2 py-2 w-28 text-start mr-2 text-xs hover:bg-red-600 cursor-pointer hover:text-white mb-1'>SPECIFICATIONS</h1>
                <h1 className='bg-neutral-200 text-gray-700 font-semibold tracking-tighter px-2 py-2 w-28 text-start mr-2 text-xs hover:bg-red-600 cursor-pointer hover:text-white mb-1'>READ OPINION</h1>
                <h1 className='bg-neutral-200 text-gray-700 font-semibold tracking-tighter px-2 py-2 w-28 text-start mr-2 text-xs hover:bg-red-600 cursor-pointer hover:text-white mb-1'>PICTURES</h1>
                <div className='flex-grow'></div>
                <h1 className='justify-end mb-3 text-sm text-end mr-3 text-red-600 font-bold tracking-tight'>ALL PRICES</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-2/6 flex-col ml-2 text-start">
          <h1 className='mt-8 text-md font-bold font-serif mb-2 text-neutral-700'>
            {phone2.name}
          </h1>
          <div className="flex w-full">
            <div className='w-2/3'>
              <img className='w-36 mb-3' src={getPhoneImage(phone2.name)} alt={phone2.name} />
              <p className='text-sm text-neutral-600'>{phone2.storage} {phone2.ram} RAM</p>
              <div className='flex items-center'>
                <p className='text-sm mr-2 text-red-600 font-semibold'>${phone2.price}</p>
                <img className='w-14 mt-2' src={am} alt="Amazon Logo" />
              </div>
            </div>
            <div className='w-1/3 flex justify-center'>
              <div className='flex flex-col mr-3'>
                <h1 className='bg-black text-white cursor-pointer font-bold text-start px-2 py-2 w-26 mr-2 text-xs hover:bg-red-600 mb-1'>REVIEW</h1>
                <h1 className='bg-neutral-200 text-gray-700 font-semibold tracking-tighter px-2 py-2 w-28 text-start mr-2 text-xs hover:bg-red-600 cursor-pointer hover:text-white mb-1'>SPECIFICATIONS</h1>
                <h1 className='bg-neutral-200 text-gray-700 font-semibold tracking-tighter px-2 py-2 w-28 text-start mr-2 text-xs hover:bg-red-600 cursor-pointer hover:text-white mb-1'>READ OPINION</h1>
                <h1 className='bg-neutral-200 text-gray-700 font-semibold tracking-tighter px-2 py-2 w-28 text-start mr-2 text-xs hover:bg-red-600 cursor-pointer hover:text-white mb-1'>PICTURES</h1>
                <div className='flex-grow'></div>
                <h1 className='justify-end mb-3 text-sm text-end mr-3 text-red-600 font-bold tracking-tight'>ALL PRICES</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CompareTable phone1={phone1} phone2={phone2} showDifferences={showDifferences} />
    </div>
  );
}

export default PhoneCard;
