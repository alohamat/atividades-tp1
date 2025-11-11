const express = require('express');
const app = express();
const port = 8080;


app.get("/saudacao/:nome", (req, res) => {
    res.send(`Olá, ${req.params.nome}`);
})

app.get("/", (req, res) => {
    res.send(`Página inicial`)
})

app.get("/sobre", (req, res) => {
    res.send("Servidor criado por Kayky")
})

app.get("/hora", (req, res) => {
    const date = new Date();
    res.send(
        `São ${date.getHours()} horas e ${date.getMinutes()} minutos e ${date.getSeconds()} segundos.`
    )
})

console.log("rodando em ", port);
app.listen(port);