import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import phoneRoutes from './router/phoneRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/phones', phoneRoutes);

app.use((req, res) => {
  res.status(404).send('404: Not Found');
});

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 30000
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });
