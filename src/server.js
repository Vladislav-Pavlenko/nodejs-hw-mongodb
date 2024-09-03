import express from 'express';
import cors from 'cors';
import contactsRouter from './routers/contacts.js';
import { env } from './utils/env.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import { logger } from './middlewares/logger.js';

const PORT = Number(env('PORT', '3000'));

export const setupServer = () => {
  const app = express();

  app.use(cors());
  app.use(logger);

  app.use(
    express.json({
      type: ['application/json', 'application/vnd.api+json'],
    }),
  );
  app.use('/contacts', contactsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
