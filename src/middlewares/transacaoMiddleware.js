const { parseISO, isBefore, isValid } = require("date-fns")

exports.validateTransacao = (req, res, next) => {
    const { valor } = req.body;

    if(valor === undefined){
        return res.status(400).send('error no undefined');
    }

    if(typeof valor !== "number" || valor < 0){
        return res.status(422).send();
    }

    next();
}