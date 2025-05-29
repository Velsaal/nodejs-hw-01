const createFakeContact = require("../utils/createFakeContact");
const readContacts = require("../utils/readContacts");
const writeContacts = require("../utils/writeContacts");

const addOneContact = async () => {
    try {
  const contacts = await readContacts();
  const newContact = createFakeContact();
  await writeContacts([...contacts, newContact]);
  console.log("Contact added successfully", newContact); 
    }
    catch(error){
        console.error("Error adding contact:", error);
    }
};

addOneContact();

