import { StudentModel } from '../student.model';
import { Student } from './student.interface';

const createStudentIntoDB = async (studentData: Student) => {
  // const result = await StudentModel.create(student);
  const student = new StudentModel(studentData);
  const result = await student.save();
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
// DELETE

const deleteStudentFromDB = async (id: string) => {
  try {
    const result = await StudentModel.updateOne({ id }, { isDeleted: true });
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
  deleteStudentFromDB,
};
