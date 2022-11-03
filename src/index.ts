import express from 'express';
import { PrismaClient } from '@prisma/client';

import UsersRoutes from '@/Features/Users';
import { API_BASEPATH } from '@/Const';

export const prisma = new PrismaClient();

const app = express();
app.use(express.json());

app.use(`${API_BASEPATH}/users`, UsersRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
