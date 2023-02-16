const express = require('express');
const router = express.Router();
const Questions = require('../controllers/QuestionsController');

router.get('/', Questions.getAll);
router.get('/:id', Questions.get);
router.post('/create', Questions.create);
router.post('/:id/options/create', Questions.createOption);
router.post('/:id/delete', Questions.delete);

module.exports = router;