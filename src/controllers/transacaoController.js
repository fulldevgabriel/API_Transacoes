const { formatISO } = require('date-fns');

const transacoes = [];

exports.createTransacao = (req, res) => {
    const { valor } = req.body;

    const dataHora = formatISO(new Date());

    const newTransacao = { valor, dataHora };

    transacoes.push(newTransacao);
    res.status(201).send();
}

exports.getTransacao = (req, res) => {
    res.json(transacoes);
}