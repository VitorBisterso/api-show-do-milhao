import { Response } from 'express';

import { INTERNAL_ERROR } from '@/Const';

export function throwError(res: Response, statusCode: number, message: string) {
  console.error(message);
  return res.status(statusCode).json({ error: message });
}

export function internalError(res: Response) {
  return throwError(res, 500, INTERNAL_ERROR);
}

export function isEmailValid(email: string) {
  return email.match(
    // eslint-disable-next-line no-useless-escape
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
}
