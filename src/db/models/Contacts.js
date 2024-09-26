import { Schema, model } from 'mongoose';
import { handleError, setUpdateOptions } from './hooks.js';
import { contactTypeList } from '../../constants/contacts.js';
const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: contactTypeList,
      required: true,
      default: 'personal',
    },
    photo: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);
contactsSchema.post('save', handleError);
contactsSchema.pre('findOneAndUpdate', setUpdateOptions);
contactsSchema.post('findOneAndUpdate', handleError);

export const ContactsCollection = model('contact', contactsSchema);
