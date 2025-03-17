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

exports.deleteTransacao = (req, res) => {
    transacoes.length = 0;

    if (transacoes.length > 0) {
        return res.status(422);
    }

    res.status(200).send(transacoes);

}