import express from 'express'
import { generateUrl } from '../controllers/shorter.controller.js'


const router = express.Router()

router.post('/shorterLink', generateUrl)

export default router