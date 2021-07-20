const Router = require('express').Router
const router = new Router()
const userController = require('../controllers/user.controller')
const {body} = require('express-validator')

router.post(
    '/registration',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 24}),
    userController.registration
)
router.post(
    '/login',
    body('email').isEmail(),
    body('password').isLength({min: 6, max: 24}),
    userController.login
)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)

module.exports = router
