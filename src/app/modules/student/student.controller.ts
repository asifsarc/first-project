import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import * as z from 'zod';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // creating a schema validation schema

    // data validation using Zod

    const zodparsedData = studentValidationSchema.parse(studentData);

    // will call service.ts

    const result = await StudentServices.createStudentIntoDB(zodparsedData);

    res.status(200).json({
      success: true,
      message: 'Student Created Successfuly',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      data: error,
    });
  }
};

// Get All Student

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();

    res.status(200).json({
      success: true,
      message: 'Students are retrived Successfuly',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      data: error,
    });
  }
};

// Get A Single Student

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student Founded',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      data: error,
    });
  }
};
// Delete
const deleteStudent = async (req: Request, res: Response) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.deleteStudentFromDB(studentId);

    res.status(200).json({
      success: true,
      message: 'Student Deleted Successfuly',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something Went Wrong',
      data: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
  deleteStudent,
};
