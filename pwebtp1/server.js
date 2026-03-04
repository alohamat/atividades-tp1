const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => res.render("index"));
app.get("/produtos", (req, res) => res.render("produtos"));
app.get("/contato", (req, res) => res.render("contato"));
app.get("/detalhes", (req, res) => res.render("detalhes"));

app.post("/contato", (req, res) => {

    const novoDado = {
        nome: req.body.nome,
        email: req.body.email,
        assunto: req.body.assunto,
        mensagem: req.body.mensagem,
        newsletter: req.body.newsletter ? true : false,
        data: new Date()
    };

    const caminhoArquivo = path.join(__dirname, "dados.json");

    fs.readFile(caminhoArquivo, "utf-8", (err, data) => {

        let dados = [];

        if (!err && data) {
            dados = JSON.parse(data);
        }

        dados.push(novoDado);

        fs.writeFile(caminhoArquivo, JSON.stringify(dados, null, 2), (err) => {
            if (err) {
                return res.status(500).send("Erro ao salvar");
            }

            res.render("sucesso");
        });
    });
});
app.get("/mensagens", (req, res) => {

    const caminhoArquivo = path.join(__dirname, "dados.json");

    fs.readFile(caminhoArquivo, "utf-8", (err, data) => {

        if (err) {
            return res.render("mensagens", { mensagens: [] });
        }

        const mensagens = JSON.parse(data);

        res.render("mensagens", { mensagens });
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});