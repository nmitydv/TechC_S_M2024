// routes/contactRoutes.js
import express from 'express';
import { createContact } from '../controller/ContactController.js';

const router = express.Router();

// POST endpoint to create a new contact
/**
 * @swagger
 * /api/contacts:
 *   post:
 *     summary: Create a new contact
 *     description: Creates a new contact in the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       '201':
 *         description: Created
 *       '400':
 *         description: Bad request
 */
router.post('/contact', createContact);

export default router;
