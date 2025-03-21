import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    // ініціалізація підключення до MongoDB
    await initMongoConnection();
    console.log('MongoDB connection successfully established.');

    // налаштування сервера
    setupServer();
    console.log('Server setup completed and running.');
  } catch (error) {
    console.error(`Error during bootstrap: ${error.message}`);
    process.exit(1); // Завершення процесу при помилці
  }
};

bootstrap();
