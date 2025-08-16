import { Schema, model, connect } from 'mongoose';
export type Username = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type Student = {
  id: string;
  name: Username;
  gender: 'male' | 'female';
  email: string;
  dateOfBirth?: string;
  avatar?: string;
  contactNumber: string;
  emergencyContactNo: string;
  contactNo: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  gurdian: Gurdian;
  localGurdian: Username;
  profileImage?: string;
  isActive: 'active' | 'inactive';
};

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGrudian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
