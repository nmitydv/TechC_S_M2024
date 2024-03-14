// controllers/contactController.js
import Contact from '../models/Contact.js';

// Controller function to handle POST request for creating a new contact
export const createContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
