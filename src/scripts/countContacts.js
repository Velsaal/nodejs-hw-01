const readContacts = require('../utils/readContacts');

const countContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log(`Total contacts: ${contacts.length}`);
  } catch (error) {
    console.error("Error counting contacts:", error);
  }
};

countContacts();
