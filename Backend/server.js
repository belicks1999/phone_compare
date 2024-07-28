import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/phoneComparison', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Phone schema and model
const phoneSchema = new mongoose.Schema({
  name: String,
  brand: String,
  storage: String,
  ram: String,
  price: Number,
  network: Object,
  launch: Object,
  body: Object,
  display: Object,
  memory: Object
});

const Phone = mongoose.model('Phone', phoneSchema);

// Route to get phone data by name
app.get('/phones', async (req, res) => {
  try {
    const { name } = req.query;
    const phone = await Phone.findOne({ name });
    if (phone) {
      res.json(phone);
    } else {
      res.status(404).json({ message: 'Phone not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
