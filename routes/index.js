const express = require("express");
const router = express.Router();

router.use('/questions',require('./questions'));
router.use('/options',require('./options'));

module.exports = router;

// * /questions/create  (To create a question)
// * /questions/:id/options/create  (To add options to a specific question)
// * /questions/:id/delete (To delete a question)
// * /options/:id/delete (To delete an option)
// * /options/:id/add_vote (To increment the count of votes)
// * /questions/:id (To view a question and it’s options)