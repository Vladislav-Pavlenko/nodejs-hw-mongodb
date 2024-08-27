import dotenv from 'dotenv';
import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

dotenv.config();
const PORT = Number(process.env.PORT) || 3000;
const logger = pino({
  transport: {
    target: 'pino-pretty',
  },
});

export const setupServer = () => {
  const app = express();
  app.use(cors());
  app.use(logger);
  app.get('/contacts', (req, res) => {
    res.json({
      status: 200,
      message: 'Successfully found contacts!',
      data: [1],
    });
  });
  app.get('/contacts/:contactId', (req, res) => {
    res.json({
      status: 200,
      message: 'Successfully found contact with id {contactId}!',
      data: {
        // об'єкт контакту
      },
    });
  });
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
  });
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
