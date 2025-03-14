const { parseISO, isBefore, isValid } = require("date-fns")

exports.validateTransacao = (req, res, next) => {
    const { valor, dataHora } = req.body;

    if(!valor === undefined || dataHora === undefined){
        return res.status(400).send();
    }

    if(typeof valor !== "number" || valor < 0){
        return res.status(422).send();
    }

    const data = parseISO(dataHora);

    if(!isValid(data)){
        return res.staus(400).send();
    }

    if(!isBefore(data)){
        return res.status(422).send();
    }

    next();
}