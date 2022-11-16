import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '@/index';
import { internalError, throwError } from '@/Utils';
import { getNotFoundErr, getRequiredFieldErr } from '@/Utils/messages';

import { JWT_SECRET_KEY } from '@/env';

type QuizParams = {
  categoryId: number;
};

export async function quiz(req: Request<QuizParams>, res: Response) {
  return jwt.verify(req.token, JWT_SECRET_KEY, async error => {
    if (error) return res.sendStatus(401);

    const { categoryId } = req.params;

    if (!categoryId)
      return throwError(res, 422, getRequiredFieldErr('categoryId'));

    const category = await prisma.category.findUnique({
      where: { id: Number(categoryId) },
    });

    if (!category) return throwError(res, 404, getNotFoundErr('category'));

    prisma.question
      .findMany({ take: 10, where: { categoryId: Number(categoryId) } })
      .then((questions: any) => res.json({ questions }))
      .catch(() => internalError(res));
  });
}
