import * as fs from 'node:fs/promises';

const createDirIfNotExsist = async (path) => {
  try {
    await fs.access(path);
  } catch (error) {
    if (error === 'ENOENT') {
      fs.mkdir(path);
    }
  }
};

export default createDirIfNotExsist;
