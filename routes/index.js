const Router = require('express')
const router = new Router()
const userRoutes = require('./user.routes')
const queryRoutes = require('./query.routes')

router.use('/user', userRoutes)
router.use('/query', queryRoutes)

module.exports = router
