import express from 'express';
import phoneRoutes from '../../router/phoneRoutes.js'; // Adjust the path if needed

const app = express();

app.use(express.json());

// Middleware to log incoming requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

app.use('/api/phones', phoneRoutes);

// Default error handling
app.use((req, res) => {
  console.log('404 Not Found');
  res.status(404).send('404: Not Found');
});

export default (req, res) => {
  return new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) {
        console.error('Error handling request:', err);
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
