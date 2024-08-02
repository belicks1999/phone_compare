import express from 'express';
import phoneRoutes from '../../router/phoneRoutes.js'; // Adjust path if needed

const app = express();

app.use(express.json()); // Ensure this middleware is used
app.use('/api/phones', phoneRoutes);

app.use((req, res) => {
  res.status(404).send('404: Not Found');
});

export default (req, res) => {
  // This handler adapts Express app for serverless function
  return new Promise((resolve, reject) => {
    app(req, res, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
