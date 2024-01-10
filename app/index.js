const express = require("express");
const app = express();
const port = 3000;
const faker = require("faker");

const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const mysql = require("mysql");

const connection = mysql.createConnection(config);

app.get("/", (req, res) => {
  const name = faker.name.findName();
  connection.query(`INSERT INTO people(nome) VALUES('${name}')`);
  connection.query(`select nome from people`, (err, result) => {
    res.send(`<h1>Full Cycle Rocks!</h1> <br>
   ${result.map((item) => `<p>${item.nome}</p>`).join("")}`);
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
