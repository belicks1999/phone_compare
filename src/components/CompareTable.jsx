import React,{useEffect} from 'react';
import axios from 'axios';

function CompareTable({ showDifferences }) {
  const specs = [
    { category: 'NETWORK', key: 'network', subKeys: ['technology'] },
    { category: 'LAUNCH', key: 'launch', subKeys: ['announced'] },
    { category: 'BODY', key: 'body', subKeys: ['dimensions', 'weight', 'build', 'sim'] },
    { category: 'DISPLAY', key: 'display', subKeys: ['type', 'size', 'resolution'] },
    { category: 'MEMORY', key: 'memory', subKeys: ['cardSlot'] },
    // Add more categories and subKeys as needed
  ];

  const phone1 = {};
  
  const phone2 = {};

        useEffect(()=>{

            




        },[])   











  // Improved normalization function
  const normalizeString = (str) => {
    if (typeof str !== 'string') return ''; // Handle non-string values
    return str.toLowerCase()
      .replace(/[\s\.,\/#!$%\^&\*;:{}=\-_`~()]/g, '') // Remove punctuation and whitespace
      .trim();
  };

  const getTextColor = (value1, value2, showDifferences) => {
    if (!showDifferences) return 'text-black'; // Return default color if differences should not be shown

    // Normalize the values
    const normalizedValue1 = normalizeString(value1);
    const normalizedValue2 = normalizeString(value2);

    // Compare the normalized values
    return normalizedValue1 === normalizedValue2 ? 'text-gray-400' : 'text-black'; // Highlight differences in red
  };

  return (
    <div className="flex flex-col w-[820px] bg-white p-2">
      {specs.map(spec => (
        <React.Fragment key={spec.key}>
          {spec.subKeys.map((subKey, index) => {
            const value1 = phone1[spec.key]?.[subKey] || 'N/A';
            const value2 = phone2[spec.key]?.[subKey] || 'N/A';
            return (
              <div className="flex w-full border-b border-gray-300" key={index}>
                <div className="flex w-2/6 text-start">
                  {index === 0 && (
                    <div className="w-1/2 border-r border-gray-300 p-1">
                      <h1 className="text-red-600 text-md tracking-tighter font-semibold">{spec.category}</h1>
                    </div>
                  )}
                  {index !== 0 && <div className="w-1/2 border-r border-gray-300 p-1"></div>}
                  <div className="w-1/2 border-r border-gray-300 p-1">
                    <p className="text-md tracking-tighter font-semibold text-gray-600 capitalize">{subKey}</p>
                  </div>
                </div>
                <div className="flex w-2/6 text-start border-r border-gray-300 p-1">
                  <p className={`text-sm ${getTextColor(value1, value2, showDifferences)}`}>
                    {value1}
                  </p>
                </div>
                <div className="flex w-2/6 text-start border-r border-gray-300 p-1">
                  <p className={`text-sm ${getTextColor(value1, value2, showDifferences)}`}>
                    {value2}
                  </p>
                </div>
              </div>
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CompareTable;
