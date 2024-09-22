import Joi from 'joi';
import { contactTypeList } from '../constants/contacts.js';

export const addContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  phoneNumber: Joi.string().min(3).max(20).required(),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .default('personal')
    .required(),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
});

export const updateContactsSchema = Joi.object({
  name: Joi.string().min(3).max(20),
  phoneNumber: Joi.string().min(3).max(20),
  email: Joi.string().min(3).max(20),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid(...contactTypeList)
    .default('personal'),
  createdAt: Joi.date().optional(),
  updatedAt: Joi.date().optional(),
});
