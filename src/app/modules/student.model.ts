import { Schema, model, connect } from 'mongoose';
import {
  Gurdian,
  LocalGrudian,
  Student,
  Username,
} from './student/student.interface';

const userNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: [true, 'first Name is Required'],
    trim: true,
    maxLength: [20, 'First Name Cannot Be more Then 20'],
  },
  middleName: { type: String },
  lastName: { type: String, required: [true, 'Last Name is Required'] },
});

const GurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: [true, 'Father Name is Required'] },
  fatherOccupation: {
    type: String,
    required: [true, 'Father Occupaton is Required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Father Contact no is Required'],
  },
  motherName: { type: String, required: [true, 'Mother Name is Required'] },
  motherOccupation: {
    type: String,
    required: [true, 'Mother Occupation is Required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Mother Contact No is Required'],
  },
});

const localGurdianSchema = new Schema<LocalGrudian>({
  name: { type: String, required: [true, 'Local Gurdian Name is Required'] },
  occupation: {
    type: String,
    required: [true, ' Local Gurdian Occupations is Required'],
  },
  contactNo: {
    type: String,
    required: [true, ' Local Gurdiant Contact No is Required'],
  },
  address: {
    type: String,
    required: [true, 'Local Gurdian Address is Required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userNameSchema,
    required: [true, 'Student Name is Required'],
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
  },
  dateOfBirth: { type: String },
  email: { type: String, required: [true, 'Email is Required'] },
  contactNo: { type: String, required: [true, 'Contact no is Required'] },
  emergencyContactNo: {
    type: String,
    required: [true, ' Emergency Contact No is Required'],
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: '{VALUE} is not Valid',
    },
  },
  presentAddress: {
    type: String,
    required: [true, ' Present Address is Required'],
  },
  gurdian: {
    type: GurdianSchema,
    rquired: [true, ' Gurdian Info is Required'],
  },
  localGurdian: {
    type: localGurdianSchema,
    required: [true, ' Local Gurdian info is Required'],
  },
  profileImage: { type: String },
  isActive: {
    type: String,
    enum: ['active', 'inActive', 'other'],
    default: 'active',
    required: [true, 'isActive is Required'],
  },
});

// Model

export const StudentModel = model<Student>('Student', studentSchema);
