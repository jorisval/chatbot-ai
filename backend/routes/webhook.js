const express = require('express');
const router = express.Router();
const facebookController = require('../controllers/facebookController');

router.get('/', facebookController.verifyWebhook);
router.post('/', facebookController.handleWebhook);

module.exports = router;
