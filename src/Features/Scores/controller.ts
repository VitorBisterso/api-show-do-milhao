import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '@/index';
import { internalError, throwError } from '@/Utils';
import { getCreationErr, getRequiredFieldErr } from '@/Utils/messages';

import { JWT_SECRET_KEY } from '@/env';

type ScoreBody = {
  userEmail: string;
  categoryId: string;
  score: number;
};

type ListScore = {
  userEmail: string;
  categoryName: string;
};

function checkParameters(param1 = '1', param2 = '2', param3 = 1) {
  let res = '';
  if (param1.length === 0) res += 'categoryName ';
  if (param2.length === 0) res += 'userEmail';
  if (param3 === null) res += 'score';
  return res;
}

export async function register(
  req: Request<unknown, unknown, ScoreBody>,
  res: Response
) {
  return jwt.verify(req.token, JWT_SECRET_KEY, async error => {
    if (error) return res.sendStatus(401);
    const { categoryId, userEmail, score } = req.body;

    const validator: string = checkParameters(categoryId, userEmail, score);
    if (validator.length !== 0)
      return throwError(res, 422, getRequiredFieldErr(validator));

    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    if (!user) return internalError(res);
    prisma.score
      .create({
        data: {
          score,
          userId: user.id,
          categoryId: Number(categoryId),
        },
      })
      .then((score: any) => res.status(201).json({ score }))
      .catch((error: any) =>
        throwError(res, 500, getCreationErr('user', error))
      );
  });
}

export function list(req: Request<unknown, unknown, ListScore>, res: Response) {
  return jwt.verify(req.token, JWT_SECRET_KEY, async error => {
    if (error) return res.sendStatus(401);
    const { userEmail, categoryName } = req.body;
    const validator: string = checkParameters(userEmail, categoryName);
    if (validator.length !== 0)
      return throwError(res, 422, getRequiredFieldErr(validator));
    const category = await prisma.category.findUnique({
      where: { name: categoryName },
    });
    const user = await prisma.user.findUnique({
      where: { email: userEmail },
    });
    if (!category || !user) return internalError(res);
    prisma.score
      .findMany({
        where: { userId: user.id, categoryId: category.id },
        orderBy: {
          score: 'desc',
        },
      })
      .then((scores: any) => res.json({ scores }))
      .catch(() => internalError(res));
  });
}

export function rank(req: Request, res: Response) {
  return jwt.verify(req.token, JWT_SECRET_KEY, async error => {
    if (error) return res.sendStatus(401);

    const includeUser = {
      select: {
        email: true,
        name: true,
      },
    };
    const includeCategory = {
      select: {
        name: true,
      },
    };

    prisma.score
      .findMany({
        orderBy: {
          score: 'desc',
        },
        include: {
          user: includeUser,
          category: includeCategory,
        },
      })
      .then((scores: any) => res.json({ scores }))
      .catch(() => internalError(res));
  });
}
