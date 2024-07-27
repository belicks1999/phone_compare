import React from 'react';
import iphone15 from '../assets/images/ip15.jpg';
import xiomo14 from '../assets/images/x14.jpg';
import am from '../assets/images/am.jpeg';

function PhoneCard() {
  return (
    <div className="flex w-[820px] justify-center items-center bg-white p-2">
      <div className="flex w-1/5 flex-col mr-4 text-start"></div>
      
      <div className="flex w-2/5 flex-col mr-4 text-start">
        <h1 className='mt-8 text-xl font-bold font-serif mb-2 text-neutral-700'>Xiaomi 14</h1>
        <img className='w-48 mb-3' src={xiomo14} alt="" />
        <p className='text-md  text-neutral-600 '>256GB 12GB RAM</p>
        <div className='flex'>
        <p className='text-md mr-2 text-red-600 font-semibold '>$ 899.99</p>
        <img className='w-16' src={am} alt="" />
        <p className='ml-20 text-red-600 font-semibold'>ALL PRICES</p>
        </div>
      </div>

      <div className="flex w-2/5 flex-col ml-4 text-start">
        <h1 className='mt-8 text-xl font-bold font-serif mb-2 text-neutral-700'>Apple iPhone 15 Pro Max</h1>
        <img className='w-48 mb-3' src={iphone15} alt="" />
        <p className='text-md  text-neutral-600 '>256GB 8GB RAM </p>
        <div className='flex'>
        <p className='text-md mr-2 text-red-600 font-semibold '>$ 871.85</p>
        <img className='w-16' src={am} alt="" />
        <p className='ml-20 text-red-600 font-semibold'>ALL PRICES</p>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
