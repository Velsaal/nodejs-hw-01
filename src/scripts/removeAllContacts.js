const writeContacts = require('../utils/writeContacts');

const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    return [];
  } catch (error) {
    console.error("Error removing all contacts:", error);
  }
};

removeAllContacts();
