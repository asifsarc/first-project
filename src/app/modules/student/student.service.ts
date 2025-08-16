import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  console.log(result);
  return result;
};

const getAllStudentsFromDB = async () => {
  try {
    const result = await StudentModel.find();
    return result;
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudentFromDB = async (id: string) => {
  try {
    const result = await StudentModel.findOne({ id });
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
