// routes/contactRoutes.js
import express from 'express';
import { createContact } from '../controller/ContactController.js';

const router = express.Router();

// POST endpoint to create a new contact
router.post('/contact', createContact);

export default router;
