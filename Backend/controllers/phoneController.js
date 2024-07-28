import Phone from '../models/phoneModel.js';

export const getPhones = async (req, res) => {
  try {
    const phones = await Phone.find();
    res.status(200).json(phones);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPhoneById = async (req, res) => {
  try {
    const phone = await Phone.findById(req.params.id);
    if (!phone) return res.status(404).json({ message: 'Phone not found' });
    res.status(200).json(phone);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
