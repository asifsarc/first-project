import { z } from 'zod';

// Student schema
export const usernameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1, 'First Name is Required')
    .max(20, 'First Name Cannot be more than 20')
    .trim(),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'Last Name is Required')
    .regex(/^[A-Za-z]+$/, 'Last Name must only contain alphabets'),
});

// Guardian schema
export const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, 'Father Name is Required'),
  fatherOccupation: z.string().min(1, 'Father Occupation is Required'),
  fatherContactNo: z.string().min(1, 'Father Contact No is Required'),
  motherName: z.string().min(1, 'Mother Name is Required'),
  motherOccupation: z.string().min(1, 'Mother Occupation is Required'),
  motherContactNo: z.string().min(1, 'Mother Contact No is Required'),
});

// Local Guardian schema
export const localGuardianValidationSchema = z.object({
  name: z.string().min(1, 'Local Guardian Name is Required'),
  occupation: z.string().min(1, 'Local Guardian Occupation is Required'),
  contactNo: z.string().min(1, 'Local Guardian Contact No is Required'),
  address: z.string().min(1, 'Local Guardian Address is Required'),
});

// Student schema
const studentValidationSchema = z.object({
  id: z.string().min(1, 'ID is Required'),
  password: z
    .string()
    .max(20)
    .max(128, 'Too long')
    .regex(/[a-z]/, 'Must include a lowercase letter')
    .regex(/[A-Z]/, 'Must include an uppercase letter')
    .regex(/\d/, 'Must include a number')
    .regex(/[^A-Za-z0-9]/, 'Must include a special character')
    .regex(/^\S+$/, 'No spaces allowed'),
  name: usernameValidationSchema,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().optional(),
  email: z.string().email('Use a valid Email Address'),
  contactNumber: z.string().min(1, 'Contact No is Required'),
  emergencyContactNo: z.string().min(1, 'Emergency Contact No is Required'),
  bloodGroup: z
    .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
    .optional(),
  presentAddress: z.string().min(1, 'Present Address is Required'),
  gurdian: guardianValidationSchema,
  localGurdian: localGuardianValidationSchema,
  profileImage: z.string().optional(),
  isActive: z.enum(['active', 'inactive']).default('active'),
  isDeleted: z.boolean(),
});
export default studentValidationSchema;
