import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '@/index';
import { internalError, throwError } from '@/Utils';
import {
  getCreationErr,
  getNotFoundErr,
  getRequiredFieldErr,
} from '@/Utils/messages';

import { JWT_SECRET_KEY } from '@/env';

type ScoreBody = {
  userEmail: string;
  categoryName: string;
  score: number;
};

function checkParameters(param1: string, param2: string, param3: number) {
  let res: string = '';
  if (!param1) res += 'categoryName ';
  if (!param2) res += 'userEmail';
  if (!param3) res += 'score';
  return res;
}

export async function register(
  req: Request<unknown, unknown, ScoreBody>,
  res: Response
) {
  return jwt.verify(req.token, JWT_SECRET_KEY, async error => {
    if (error) return res.sendStatus(401);
    const { categoryName, userEmail, score } = req.body;
    const validator: string = checkParameters(categoryName, userEmail, score);
    if (!validator) return throwError(res, 422, getRequiredFieldErr(validator));
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
    });
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    prisma.score
      .create({
        data: {
          score,
          userId: user.id,
          categoryId: category.id,
        },
      })
      .then((score: any) => res.status(201).json({ score }))
      .catch((error: any) =>
        throwError(res, 500, getCreationErr('user', error))
      );
  });
}

export function list(req: Request<unknown, unknown, ScoreBody>, res: Response) {
  //
}
