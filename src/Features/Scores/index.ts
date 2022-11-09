import express from 'express';

import { verifyToken } from '@/Utils';
import { list, register } from './controller';

const router = express.Router();

router.route('/scores').get(verifyToken, list);
router.route('/scores').post(verifyToken, register);

export default router;
