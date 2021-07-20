const Router = require('express').Router
const router = new Router()
const queryController = require('../controllers/query.controller')

router.post('/', queryController.createQuery)
router.get('/', queryController.getQueriesAll)
router.get('/:id', queryController.getQueryOne)
router.post('/:id', queryController.deleteQuery)
router.post('/:id', queryController.editQuery)

module.exports = router
