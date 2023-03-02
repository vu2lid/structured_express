// routes/helloRoutes.js

import express from 'express';
import { getHello, createHello } from '../controllers/helloController.js';

const helloRoutes = express.Router();

helloRoutes.get('/', getHello);
helloRoutes.post('/', createHello);

export default helloRoutes;
