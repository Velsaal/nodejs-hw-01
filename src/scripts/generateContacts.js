const createFakeContact = require("../utils/createFakeContact");
const readContacts = require("../utils/readContacts");
const writeContacts = require("../utils/writeContacts");

const generateContacts = async (count = 5) => {
  try {
    const contacts = await readContacts();
    const newContacts = Array.from({ length: count }, () => createFakeContact());
    await writeContacts([...contacts, ...newContacts]);
  } catch (error) {
    console.error("Failed to generate contacts:", error);
  }
};

generateContacts();
