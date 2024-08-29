import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import * as contactsServices from './services/contacts.js';
import { env } from './utils/env.js';
const PORT = Number(env('PORT', '3000'));
export const setupServer = () => {
  const app = express();

  const logger = pino({
    transport: {
      target: 'pino-pretty',
    },
  });

  app.use(cors());
  app.use(logger);

  app.use(express.json());
  app.get('/contacts', async (req, res) => {
    const data = await contactsServices.getAllContacts();
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data,
    });
  });
  app.get('/contacts/:contactId', async (req, res) => {
    const { contactId } = req.params;
    const data = await contactsServices.getContactById(contactId);
    if (!data) {
      return res.status(404).json({
        message: `Movie with id=${contactId} not found`,
      });
    }
    res.json({
      status: 200,
      message: `Successfully found contact with id ${contactId}!`,
      data,
    });
  });
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.use((error, reeq, res, next) => {
    res.status(500).json({ message: error.message });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
