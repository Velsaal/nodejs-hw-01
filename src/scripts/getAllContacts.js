const readContacts = require('../utils/readContacts');

const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(contacts);
  } catch (error) {
    console.error("Error getting all contacts:", error);
  }
};

getAllContacts();

