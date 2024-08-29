import { Schema, model } from 'mongoose';
const conactsSchema = new Schema(
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
      enum: ['personal', 'home', 'work'],
      required: true,
      default: 'personal',
    },
  },
  { versionKey: false, timestamps: true },
);
export const ContactsCollection = model('contact', conactsSchema);
