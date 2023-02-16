const express = require('express');
const router = express.Router();
const Options = require('../controllers/OptionsController');

router.post('/:id/delete', Options.delete);
router.post('/:id/add_vote', Options.addVote);

module.exports = router;