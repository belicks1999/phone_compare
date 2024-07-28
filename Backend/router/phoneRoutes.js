import express from 'express';
import { getPhones, getPhoneById } from '../controllers/phoneController.js';

const router = express.Router();

router.get('/', getPhones);
router.get('/:id', getPhoneById);

export default router;
