const express = require('express');
const router = express.Router();
const transacaoController = require('../controllers/transacaoController');
const transacaoMiddlewares = require('../middlewares/transacaoMiddleware');

router.post('/transacao', transacaoMiddlewares.validateTransacao, transacaoController.createTransacao)
router.get('/transacao', transacaoController.getTransacao);
router.delete('/transacao', transacaoController.deleteTransacao);

module.exports = router