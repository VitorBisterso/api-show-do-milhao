import express from 'express';

import { verifyToken } from '@/Utils';
import { quiz } from './controller';

const router = express.Router();

router.route('/quiz/:categoryId').get(verifyToken, quiz);

export default router;
