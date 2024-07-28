import mongoose from 'mongoose';

const phoneSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  specs: {
    network: { technology: String },
    launch: { announced: String },
    body: { dimensions: String, weight: String, build: String, sim: String },
    display: { type: String, size: String, resolution: String },
    memory: { cardSlot: String },
  },
});

const Phone = mongoose.model('Phone', phoneSchema);

export default Phone;
