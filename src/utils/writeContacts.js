const fs = require('fs').promises;
const path = require('path');

const PATH_DB = path.join(__dirname, '..', 'db', 'db.json');

const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
  } catch (error) {
    throw error;
  }
};

module.exports = writeContacts;
