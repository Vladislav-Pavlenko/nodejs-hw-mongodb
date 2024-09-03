import { ContactsCollection } from '../db/models/Contacts.js';
export const getAllContacts = () => ContactsCollection.find();
export const getContactById = (id) => ContactsCollection.findById(id);
export const createNewContacts = async (payload) => {
  const contacts = await ContactsCollection.create(payload);
  return contacts;
};
export const deleteContact = async (id) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: id,
  });
  return contact;
};
export const patchContact = async (id, payload, options = {}) => {
  const rawResult = await ContactsCollection.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!rawResult || !rawResult.value) return null;
  return {
    contacts: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
