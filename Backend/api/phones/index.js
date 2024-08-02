import express from 'express';
import phoneRoutes from '../../router/phoneRoutes.js'; // Adjusted path to phoneRoutes

const app = express();

// Use phone routes
app.use('/api/phones', phoneRoutes);

// Default error handling
app.use((req, res) => {
  res.status(404).send('404: Not Found');
});

// Export the Express app directly
export default app;
