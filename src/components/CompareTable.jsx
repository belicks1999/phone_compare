import React from 'react';

function CompareTable() {
  const specs = [
    { category: 'NETWORK', key: 'network', subKeys: ['technology'] },
    { category: 'LAUNCH', key: 'launch', subKeys: ['announced'] },
    { category: 'BODY', key: 'body', subKeys: ['dimensions', 'weight', 'build', 'sim'] },
    { category: 'DISPLAY', key: 'display', subKeys: ['type', 'size', 'resolution'] },
    { category: 'MEMORY', key: 'memory', subKeys: ['cardSlot'] },
    // Add more categories and subKeys as needed
];
const phone1 = {
    network: { technology: 'GSM / CDMA / HSPA / CDMA2000 / LTE / 5G' },
    launch: { announced: '2023, September 14' },
    body: {
      dimensions: '160.8 x 78.1 x 7.4 mm',
      weight: '228 g',
      build: 'Glass front, glass back, stainless steel frame',
      sim: 'Nano-SIM and eSIM'
    },
    display: {
      type: 'Super Retina XDR OLED',
      size: '6.7 inches',
      resolution: '1284 x 2778 pixels'
    },
    memory: { cardSlot: 'No' },
  };
  
  const phone2 = {
    network: { technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G' },
    launch: { announced: '2023, October 1' },
    body: {
      dimensions: '161.9 x 74.4 x 8.1 mm',
      weight: '196 g',
      build: 'Glass front, aluminum back, aluminum frame',
      sim: 'Dual SIM (Nano-SIM, dual stand-by)'
    },
    display: {
      type: 'AMOLED',
      size: '6.81 inches',
      resolution: '1440 x 3200 pixels'
    },
    memory: { cardSlot: 'Yes' },
  };

  return (
    <div className="flex flex-col w-[820px] bg-white p-2">
      {specs.map(spec => (
        <React.Fragment key={spec.key}>
          {spec.subKeys.map((subKey, index) => (
            <div className='flex w-full border-b border-gray-300' key={index}>
              <div className="flex w-2/6 text-start">
                {index === 0 && (
                  <div className='w-1/2 border-r border-gray-300 p-1'>
                    <h1 className='text-red-600 text-md tracking-tighter font-semibold'>{spec.category}</h1>
                  </div>
                )}
                {index !== 0 && <div className='w-1/2 border-r border-gray-300 p-1'></div>}
                <div className='w-1/2 border-r border-gray-300 p-1'>
                  <p className='text-md tracking-tighter font-semibold text-gray-600 capitalize'>{subKey}</p>
                </div>
              </div>
              <div className="flex w-2/6 text-start border-r border-gray-300 p-1">
                <p className='text-sm'>{phone1[spec.key][subKey]}</p>
              </div>
              <div className="flex w-2/6 text-start border-r border-gray-300 p-1">
                <p className='text-sm'>{phone2[spec.key][subKey]}</p>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

export default CompareTable;
