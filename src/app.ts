import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentsRoutes } from './app/modules/student/student.route';
import { UsersRoutes } from './app/modules/user/user.route';
const app: Application = express();

// parser

app.use(express.json());
app.use(cors());

// application routes

app.use('/api/v1/students', StudentsRoutes);
app.use('/api/v1/users', UsersRoutes);

app.get('/', (req: Request, res: Response) => {
  const a = 10;

  res.send(a);
});

export default app;
