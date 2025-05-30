import { promises as fs } from 'fs';
import { PATH_DB } from '../constants/contacts.js';

const writeContacts = async (contacts) => {
  await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));
};

export default writeContacts;
