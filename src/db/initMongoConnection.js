'YTo5cPe2WV1NNhl2';
import mongoose from 'mongoose';
import { env } from '../utils/env.js';

export const initMongoConnection = async () => {
  try {
    const user = env('MONGODB_USER');
    const pass = env('MONGODB_PASSWORD');
    const url = env('MONGODB_URL');
    const name = env('MONGODB_DB');
    const DB_HOST = `mongodb+srv://${user}:${pass}@${url}/${name}?retryWrites=true&w=majority&appName=My-contacts`;
    await mongoose.connect(DB_HOST);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.log('Mongodb connection error', error.message);
    throw error;
  }
};
