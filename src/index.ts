import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

import UsersRoutes from '@/Features/Users';
import ScoresRoutes from '@/Features/Scores';
import CategoryRoutes from '@/Features/Category';
import QuestionsRoutes from '@/Features/Questions';
import { API_BASEPATH } from '@/Const';

export const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());

app.use(`${API_BASEPATH}/users`, UsersRoutes);
app.use(`${API_BASEPATH}/scores`, ScoresRoutes);
app.use(`${API_BASEPATH}/categories`, CategoryRoutes);
app.use(`${API_BASEPATH}/questions`, QuestionsRoutes);

app.listen(5000, () => console.log('Server started on port 5000'));
