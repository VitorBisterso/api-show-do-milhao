import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import { prisma } from '@/index';
import { internalError, isEmailValid, throwError } from '@/Utils';
import {
  getCreationErr,
  getMinLengthErr,
  getNotFoundErr,
} from '@/Utils/messages';

import { JWT_SECRET_KEY } from '@/env';

type RegisterBody = {
  name: string;
  email: string;
  password: string;
};

export async function register(
  req: Request<unknown, unknown, RegisterBody>,
  res: Response
) {
  const { name, email, password } = req.body;

  if (name && name.length < 3)
    return throwError(res, 422, getMinLengthErr('name', 3));

  if (!isEmailValid(email)) return throwError(res, 422, 'Email inválido');

  if (password && password.length < 5)
    return throwError(res, 422, getMinLengthErr('password', 5));

  const user = await prisma.user.findUnique({
    where: { email },
  });
  if (user) return throwError(res, 403, 'Usuário já existente!');

  bcrypt.hash(password, 10, (error, hash) => {
    if (error) return internalError(res);

    prisma.user
      .create({
        data: {
          name,
          email,
          password: hash,
        },
      })
      .then((user: any) => res.status(201).json({ user }))
      .catch((error: any) =>
        throwError(res, 500, getCreationErr('user', error))
      );
  });
}

type LoginBody = {
  email: string;
  password: string;
};

export async function login(
  req: Request<unknown, unknown, LoginBody>,
  res: Response
) {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) return throwError(res, 404, getNotFoundErr('user'));

  bcrypt.compare(password, user.password, (error, equal) => {
    if (error) return internalError(res);

    if (!equal) {
      const errorMessage = 'Credenciais inválidas';
      return throwError(res, 400, errorMessage);
    }

    jwt.sign({ user }, JWT_SECRET_KEY, { expiresIn: '30d' }, (err, token) => {
      if (err) return internalError(res);

      return res.json({ token });
    });
  });
}
