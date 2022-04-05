const express = require('express');
const router = express.Router();

const actionController = require('../controllers/action-controller');

router.use(express.urlencoded());

router.post('/create-list', actionController.create);

router.post('/delete-list',actionController.delete);

module.exports = router;
