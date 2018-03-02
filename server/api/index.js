import { Router } from 'express'

import web from './web'
import admin from './admin'
const router = Router()

// 添加网页和后台路由
router.use(web)
router.use('/admin',admin)
export default router
