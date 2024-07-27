import React from 'react';

const SearchBox = () => {
  return (
    <div className="flex w-[820px] justify-center items-center bg-white p-2">
      <div className="flex w-1/5 flex-col mr-4 text-start"></div>
      
      <div className="flex w-2/5 flex-col mr-4 text-start bg-gray-100 p-2">
        <label className="mb-2 text-xs font-serif font-bold" htmlFor="">COMPARE WITH</label>
        <input type="text" className="px-1 w-full outline outline-1" placeholder="Search" />
      </div>

      <div className="flex w-2/5 flex-col ml-4 text-start bg-gray-100 p-2">
        <label className="mb-2 text-xs font-serif font-bold" htmlFor="">COMPARE WITH</label>
        <input type="text" className="px-1 w-full outline outline-1" placeholder="Search" />
      </div>
    </div>
  );
};

export default SearchBox;
