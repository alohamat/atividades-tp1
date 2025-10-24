
const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (request, response) => {
    response.send('Envie os parâmetros n1, n2 e operacao para /conta')
})

app.get('/conta', (req, res) => {
    const n1 = parseFloat(req.query.n1);
    const n2 = parseFloat(req.query.n2);
    const operacao = req.query.operacao;
    let result;
    console.log("n1=" + n1);
    console.log("n2=" + n2);
    console.log("operacao=", operacao);
    switch (operacao) {
        case "somar":
            result = n1 + n2;
            break;
        case "subtrair":
            result = n1 - n2;
            break;
        case "dividir":
            n2 == 0 ? res.send({conta : "Não é possivel dividir por zero"}) : result = n1 / n2;
            break;
        case "multiplicar":
            result = n1 * n2;
            break;
    };
    if (isNaN(result)) {
        res.send({conta: "Valores inválidos."})
        console.log("deu NaN");
    } else {
        res.send({ conta: result })
        console.log("deu bom: ", result);
    }
})


app.listen(8080)
