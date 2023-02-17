const Questions = require('../models/questions');
const Options = require('../models/options');

// An Extra API to help with the relevant IDs of questions and there options in database
module.exports.getAll = (req, res) => {
    Questions.find({}, (err, questions) => {
        if (err) { sendErrorResp("Error occured while getting all question", err, res); return; }
        sendSuccessResp("Question Fetched !", questions, res);
    });
}

// Fetch the question and its options using ID from the database
module.exports.get = async (req, res) => {
    try {
        let question = await Questions.findById(req.params.id).populate('options');

        let options_filtered = [];
        for (a of question.options) {
            let { id, text, votes, link_to_vote } = a;
            options_filtered.push({ id, text, votes, link_to_vote });
        }

        if (question) {

            details = {
                id: question.id,
                title: question.title,
                options: options_filtered
            }

            sendSuccessResp("Your Question is ", details, res);

        } else {

            sendErrorResp("Please check the id, unable to find the question !", err, res);
            return;

        }

    } catch (err) {
        sendErrorResp("Please check the id, unable to find the question !", err, res);
        return;
    }
}

// Create the new question in the database
module.exports.create = (req, res) => {
    Questions.create({
        title: req.body.title
    }, (err, question) => {
        if (err) { sendErrorResp("Error occured while creating question, please check the form parameters (title) are correctly provided !", err, res); return; }
        sendSuccessResp("Question Created !", question, res);
    });
}

// Delete existing question and its options (if all options have zero vote) from the database
module.exports.delete = async (req, res) => {
    let question = await Questions.findById(req.params.id).populate("options");
    if (question) {

        for (a of question.options) {
            if (a.votes > 1) {
                sendErrorResp("The question can't be deleted as one of the options is having atleast one vote", "QUE IS NOT DELETED", res);
                return;
            }
        }

        question.remove();
        await Options.deleteMany({ question: req.params.id });

        sendSuccessResp("Question and relevant options are deleted successfully !", "", res);
    
    } else {

        sendErrorResp("Please select correct question id : Unable to find the question", "", res);

    }

}

// Create an option for a question
module.exports.createOption = (req, res) => {

    Questions.findById(req.params.id, (err, question) => {
        if (err || !question) { sendErrorResp("Invalid question ID", err, res); return; }

        Options.create({
            text: req.body.text,
            votes: 0,
            question: question.id
        }, (err, option) => {
            if (err) { sendErrorResp("Error occured while creating option", err, res); return; }
            option.link_to_vote = `${req.protocol}://${req.headers.host}/options/${option.id}/add_vote`;
            option.save();
            question.options.push(option);
            question.save();
            sendSuccessResp("Option Created and linked successfully !", question, res);
        });

    })
}

// Generic error function : Sends error response
function sendErrorResp(msg, err, res) {
    console.log(`${msg} : ${err}`);
    res.status(501).send(`Error Message :  ${msg}`);
}

// Generic success function : Sends success response
function sendSuccessResp(msg, response, res) {
    res.status(200).send({ msg, response });
}
