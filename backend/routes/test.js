const express = require('express');
const router = express.Router();
const test = require('../controllers/test');

router.post('/', test.testMessage);

module.exports = router;