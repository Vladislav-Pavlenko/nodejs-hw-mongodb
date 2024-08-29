import { ContactsCollection } from '../db/models/Contacts.js';
export const getAllContacts = () => ContactsCollection.find();
export const getContactById = (id) => ContactsCollection.findById(id);
