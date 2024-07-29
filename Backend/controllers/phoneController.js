import Phone from '../models/phoneModel.js';

// Controller to get all phones
export const getPhones = async (req, res) => {
  try {
    // Fetch all phone documents from the database
    const phones = await Phone.find();
    // Send the phones array as a JSON response with status 200 (OK)
    res.status(200).json(phones);
  } catch (error) {
    // Send an error message with status 500 (Internal Server Error) if something goes wrong
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a single phone by its ID
export const getPhoneById = async (req, res) => {
  try {
    // Find a phone document by its ID from the database
    const phone = await Phone.findById(req.params.id);
    // If no phone is found, send a 404 (Not Found) response
    if (!phone) return res.status(404).json({ message: 'Phone not found' });
    // Send the phone document as a JSON response with status 200 (OK)
    res.status(200).json(phone);
  } catch (error) {
    // Send an error message with status 500 (Internal Server Error) if something goes wrong
    res.status(500).json({ message: error.message });
  }
};
