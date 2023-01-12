let express = require('express')
let router = express.Router();
const productosController = require('../controllers/productosController');

router.get('/', productosController.home);
router.get('/register', productosController.register);
router.get('/login', productosController.login);

module.exports = router;