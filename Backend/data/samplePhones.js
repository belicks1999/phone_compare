import Phone from '../models/phoneModel.js';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';

dotenv.config();
connectDB();

const samplePhones = [
  {
    name: 'Phone 1',
    network: { technology: 'GSM / CDMA / HSPA / CDMA2000 / LTE / 5G' },
    launch: { announced: '2023, September 14' },
    body: {
      dimensions: '160.8 x 78.1 x 7.4 mm',
      weight: '228 g',
      build: 'Glass front, glass back, stainless steel frame',
      sim: 'Nano-SIM and eSIM',
    },
    display: {
      type: 'Super Retina XDR OLED',
      size: '6.7 inches',
      resolution: '1284 x 2778 pixels',
    },
    memory: { cardSlot: 'No' },
  },
  {
    name: 'Phone 2',
    network: { technology: 'GSM / CDMA / HSPA / EVDO / LTE / 5G' },
    launch: { announced: '2023, October 1' },
    body: {
      dimensions: '161.9 x 74.4 x 8.1 mm',
      weight: '196 g',
      build: 'Glass front, aluminum back, aluminum frame',
      sim: 'Dual SIM (Nano-SIM, dual stand-by)',
    },
    display: {
      type: 'AMOLED',
      size: '6.81 inches',
      resolution: '1440 x 3200 pixels',
    },
    memory: { cardSlot: 'Yes' },
  },
];

const importData = async () => {
  try {
    await Phone.deleteMany();
    await Phone.insertMany(samplePhones);
    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

importData();
