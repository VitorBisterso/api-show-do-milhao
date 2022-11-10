import express from 'express';

import { verifyToken } from '@/Utils';
import { list, register, rank } from './controller';

const router = express.Router();

router.route('/').get(verifyToken, list);
router.route('/').post(verifyToken, register);
router.route('/rank').get(verifyToken, rank);

export default router;
