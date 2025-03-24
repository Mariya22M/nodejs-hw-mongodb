import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const startApp = async () => {
  try {
    await initMongoConnection();

    setupServer();
  } catch (error) {
    console.error('Critical error during app startup:', error);
    process.exit(1);
  }
};

startApp();