import express from 'express'
const router = express.Router()

import { logout, register, userLogin } from '../controllers/AuthController'

router.post('/register', register)
router.post('/login', userLogin)
router.get('/logout', logout)


export default router