import express from 'express';

import { verifyToken } from '@/Utils';
import { category } from './controller';

const router = express.Router();

router.route('/categories').get(verifyToken, category);

export default router;
