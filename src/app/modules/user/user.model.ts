import { Schema, model, connect } from 'mongoose';
import { Address, Name, Preferences, User } from './user.interface';

const nameSchema = new Schema<Name>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

const addressSchema = new Schema<Address>({
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  country: { type: String, required: true },
});

const preferenceSchema = new Schema<Preferences>({
  newsletter: { type: Boolean, default: true },
  notifications: {
    email: { type: Boolean, default: true },
    sms: { type: Boolean, default: false },
    push: { type: Boolean, default: true },
  },
});

const userSchema = new Schema<User>({
  userId: { type: String, required: true },
  name: {
    type: nameSchema,
    required: true,
  },
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  dathOfBirth: { type: String, required: true },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
  },
  address: {
    type: addressSchema,
    required: true,
  },
  preference: preferenceSchema,
  acountStatus: {
    type: String,
    enum: ['active', 'inactive', 'banned'],
  },
  roles: { type: [String], default: ['user'] },
});

export const UserModel = model('User', userSchema);
