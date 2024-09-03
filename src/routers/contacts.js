import { Router } from 'express';
import {
  createNewContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
} from '../controllers/contacts.js';
import ctrlWrapper from '../utils/ctrlWrapper.js';
const contactsRouter = Router();

contactsRouter.get('/', ctrlWrapper(getAllContactsController));
contactsRouter.get('/:contactId', ctrlWrapper(getContactByIdController));
contactsRouter.post('/', ctrlWrapper(createNewContactController));
contactsRouter.delete('/:contactId', ctrlWrapper(deleteContactController));
contactsRouter.patch('/:contactId', ctrlWrapper(patchContactController));

export default contactsRouter;
