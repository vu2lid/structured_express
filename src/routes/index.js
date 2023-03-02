// routes/index.js

import express from 'express';
import helloRoutes from './helloRoutes.js';

const router = express.Router();

router.use('/hello', helloRoutes);

export default router;