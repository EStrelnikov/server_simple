import express from 'express'
import { getProjects } from './projects.controller.js'

const router = express.Router()

router.route('/').get(getProjects)

export default router
