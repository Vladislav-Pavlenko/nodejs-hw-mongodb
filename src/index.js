import { TEMP_UPLOAD_DIR, UPLOAD_DIR } from './constants/index.js';
import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';
import createDirIfNotExsist from './utils/createDirIfNotExsist.js';

const startApp = async () => {
  await initMongoConnection();
  setupServer();
  await createDirIfNotExsist(TEMP_UPLOAD_DIR);
  await createDirIfNotExsist(UPLOAD_DIR);
};

startApp();
