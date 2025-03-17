const { formatISO } = require('date-fns');

const transacoes = [];

exports.createTransacao = (req, res) => {
    const { valor } = req.body;

    const valorFloat = Number(valor.toFixed(2));
    console.log(valorFloat, typeof valorFloat)

    const dataHora = formatISO(new Date());

    const newTransacao = { valorFloat, dataHora };

    transacoes.push(newTransacao);
    res.status(201).send();
}

exports.getTransacao = (req, res) => {
    res.json(transacoes);
}