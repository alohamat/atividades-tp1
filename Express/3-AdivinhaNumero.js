const express = require("express");
const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log("Número secreto:", numeroSecreto);

app.get("/", (req, res) => {
  res.send(`
    <h1>Adivinhe o Número</h1>
    <form method="POST">
      <input type="number" name="palpite" required>
      <button type="submit">Enviar</button>
    </form>
  `);
});

app.post("/", (req, res) => {
  const palpite = Number(req.body.palpite);
  let msg = "";

  if (palpite < numeroSecreto) msg = `Seu palpite (${palpite}) é muito baixo!`;
  else if (palpite > numeroSecreto) msg = `Seu palpite (${palpite}) é muito alto!`;
  else msg = `ACERTOU MISERÁVEL! Era ${numeroSecreto}!`;

  res.send(`
    <h1>Adivinhe o Número</h1>
    <p>${msg}</p>
    <form method="POST">
      <input type="number" name="palpite" required>
      <button type="submit">Tentar de novo</button>
    </form>
  `);
});

app.listen(port, () => {
    console.log(`Rodando em ${port}`);
});
