import React from 'react';

function CompareRow({ category, subcategory, phone1, phone2, isHeader }) {
  return (
    <div className='flex w-full border-b border-gray-300'>
      <div className="flex w-2/6 text-start">
        {isHeader && (
          <div className='w-1/2 border-r border-gray-300 p-1'>
            <h1 className='text-red-600 text-md tracking-tighter font-semibold'>{category}</h1>
          </div>
        )}
        <div className={`w-1/2 border-r border-gray-300 p-1 ${isHeader ? '' : 'mt-1'}`}>
          <p className='text-md tracking-tighter font-semibold text-gray-600'>{subcategory}</p>
        </div>
      </div>
      <div className="flex w-2/6 text-start border-r border-gray-300 p-1">
        <p className='text-sm'>{phone1}</p>
      </div>
      <div className="flex w-2/6 text-start border-r border-gray-300 p-1">
        <p className='text-sm'>{phone2}</p>
      </div>
    </div>
  );
}

export default CompareRow;
