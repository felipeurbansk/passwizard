import { Router } from 'express';

import { passwordsRoutes } from './password.routes.js'

const router = Router();

router.use('/passwords', passwordsRoutes);

export { router };