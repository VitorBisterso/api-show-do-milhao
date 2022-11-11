import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { prisma } from '@/index';
import { internalError } from '@/Utils';

import { JWT_SECRET_KEY } from '@/env';

export function category(req: Request, res: Response) {
  return jwt.verify(req.token, JWT_SECRET_KEY, async error => {
    if (error) return res.sendStatus(401);

    prisma.category
      .findMany()
      .then((categories: any) => res.json({ categories }))
      .catch(() => internalError(res));
  });
}
