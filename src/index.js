import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import { logger } from './utils/contacts'; // Якщо використовуєш pino для логування

const bootstrap = async () => {
  try {
    // ініціалізація підключення до MongoDB
    await initMongoConnection();
    logger.info('MongoDB connection successfully established.');

    // налаштування сервера
    setupServer();
    logger.info('Server setup completed and running.');
  } catch (error) {
    logger.error(`Error during bootstrap: ${error.message}`);
    process.exit(1); // Завершення процесу при помилці
  }
};

bootstrap();
