const router = require('express').Router()

const apiRoutes = require('./api')
const homepageRoutes = require('./homepageRoutes.js')
const dashboardRoutes = require('./dashboardRoutes.js')
const commentPageRoutes = require('./commentPageRoutes.js')

router.use('/', homepageRoutes)
router.use('/api', apiRoutes)
router.use('/homepage', homepageRoutes)
router.use('/dashboard', dashboardRoutes)
router.use('/comments-page', commentPageRoutes)

module.exports = router
