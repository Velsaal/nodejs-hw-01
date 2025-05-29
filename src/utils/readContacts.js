const fs = require('fs').promises;
const path = require('path');

const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');

const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error;
  }
};

module.exports = readContacts;
