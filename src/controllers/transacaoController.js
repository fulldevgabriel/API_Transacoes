const { formatISO, parseISO } = require('date-fns');

const transacoes = [];

exports.createTransacao = (req, res) => {
    const { valor } = req.body;

    const valorFloat = Number(valor.toFixed(2));

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

exports.getEstatistica = (req, res) => {
    const horaAgora = new Date();

    const sessentaSeg = new Date(horaAgora.getTime() - 60000);

    const transacoesRecentes = transacoes.filter(({ dataHora }) => {
        return parseISO(dataHora) >= sessentaSeg;
    });

    if (transacoesRecentes.length === 0) {
        return res.status(200).json({ count: 0, sum: 0, avg: 0, min: 0, max: 0 });
    }

    const valores = transacoesRecentes.map(t => t.valorFloat);
    const sum = valores.reduce((acc, v) => acc + v, 0);
    const avg = sum / valores.length;
    const min = Math.min(...valores);
    const max = Math.max(...valores);


    res.json({
        count: valores.length,
        sum: parseFloat(sum.toFixed(2)),
        avg: parseFloat(avg.toFixed(2)),
        min: parseFloat(min.toFixed(2)),
        max: parseFloat(max.toFixed(2))
    });


}