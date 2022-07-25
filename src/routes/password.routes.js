import { Router } from 'express'

import { GenereatePasswordController } from '../modules/password/useCases/generatePassword/GeneratePasswordController.js'

const passwordsRoutes = new Router();

const generatePassword = new GenereatePasswordController();

passwordsRoutes.get('/', generatePassword.handle)

export { passwordsRoutes }