import express from 'express';
import { getPhones, getPhoneById } from '../controllers/phoneController.js';

const router = express.Router();

// Route to get all phones
router.get('/', getPhones);

// Route to get a specific phone by its ID
router.get('/:id', getPhoneById);

export default router;
