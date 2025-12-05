const express = require("express");
const app = express();
const port = 8000;


app.use(express.urlencoded({ extended: true }));
const dicio = {};


app.get("/", (req, res) => {
  res.send(`
  <h1>Adivinhe o Número</h1>
  <form method="POST">
  <input type="number" name="palpite" required>
  <input type="text" name="id" required>
  <button type="submit">Enviar</button>
  </form>
  `);
});

app.post("/", (req, res) => {
    const palpite = Number(req.body.palpite);
    const id = req.body.id;
    let msg = "";
  
    if (!dicio[id]) {
      dicio[id] = Math.floor(Math.random() * 100) + 1;
      console.log(`Criado numero secreto para ${id}:`, dicio[id]);
    }
  
    if (palpite < dicio[id]) msg = `${id}, palpite (${palpite}) é muito baixo!`;
    else if (palpite > dicio[id]) msg = `${id}, palpite (${palpite}) é muito alto!`;
    else {
      msg = `ACERTOU, ${id}! Era ${dicio[id]}!`;
      delete dicio[id]; // reseta o jogo
    }
  
    res.send(`
      <h1>Adivinhe o Número</h1>
      <p>${msg}</p>
      <form method="POST">
        <input type="number" name="palpite" required>
        <input type="hidden" name="id" value="${id}">
        <button type="submit">Tentar de novo</button>
      </form>
    `);
  });
  
  

app.listen(port, () => {
    console.log(`Rodando em ${port}`);
});
