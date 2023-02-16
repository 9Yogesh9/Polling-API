// const Options = require('../models/options');
const Options = require('../models/options');
const Questions = require('../models/questions');

module.exports.addVote = (req, res) => {
    Options.findById(req.params.id, (err, option) => {
        if (err) { sendErrorResp("Error occured adding vote to an option", err, res); return; }
        option.votes++;
        option.save();
        sendSuccessResp("Upvoted !", option, res);
    });
}

module.exports.delete = async (req, res) => {
    let option = await Options.findById(req.params.id);

    if (option) {
        if (option.votes > 0) {
            sendErrorResp("Option can't be deleted as votes are more than 0", option, res);
            return;
        }

        option.remove();

        await Questions.findByIdAndUpdate(option.question, { $pull: { options: req.params.id } });
        sendSuccessResp("Successfully deleted the option !", option, res);

    } else {
        sendErrorResp("Unable to find Option : Please check option ID", option, res);
        return;
    }
}

function sendErrorResp(msg, err, res) {
    console.log(`${msg} : ${err}`);
    res.status(501).send(`Error Message : ${msg}`);
}

function sendSuccessResp(msg, response, res) {
    res.status(200).send({ msg, response });
}