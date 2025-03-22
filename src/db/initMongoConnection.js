import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Завантаження змінних середовища з .env файлу
dotenv.config();

export const initMongoConnection = async () => {
  try {
    const user = process.env.MONGODB_USER;
    const pwd = process.env.MONGODB_PASSWORD;
    const url = process.env.MONGODB_URL;
    const db = process.env.MONGODB_DB;

    if (!user || !pwd || !url || !db) {
      throw new Error('Missing MongoDB connection variables');
    }

    const connectionString = `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority`;

    // Підключення до MongoDB
    await mongoose.connect(connectionString);
    console.log('MongoDB connection successfully established!');
  } catch (e) {
    console.error('Error while setting up Mongo connection', e);
    throw e;
  }
};
