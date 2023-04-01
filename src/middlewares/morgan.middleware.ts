import { Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';

export const morganMiddleware = morgan('dev');

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log('Logging request:', req.method, req.path);
  next();
}
