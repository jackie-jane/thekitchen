const controllers = require('../controllers/controllers')

const router = Router()

router.get('/all', controllers.getAll)
router.get('/art/:id', controllers.getOne)
router.post('/all', controllers.createArt)
router.put('/art/:id', controllers.updateArt)
router.delete('/art/:id', controllers.deleteArt)

module.exports = router