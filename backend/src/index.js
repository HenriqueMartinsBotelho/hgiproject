const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  //   port: "3306",
  password: "",
  database: "hgi",
});

db.connect(function (error) {
  if (error) {
    console.error("error connecting :" + error.stack);
    return;
  }
  console.log("Connected as id :" + db.threadId);
});

// app.use(bodyParser).urlencoded({ extended: true });
app.use(cors());
app.use(express.json());

app.put("/api/update/:id", (req, res) => {
  const id = req.params.id;
  const sqlUpdate =
    "UPDATE user SET name = ?, email = ?, password = ?, date = ?  WHERE id = ?";
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const date = req.body.date;
  db.query(sqlUpdate, [name, email, password, date, id], (err, result) => {
    if (err) console.log(err);
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "DELETE FROM user WHERE id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(err);
  });
});

app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM user";
  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

app.post("/api/insert", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const date = req.body.date;

  const sqlInsert =
    "INSERT INTO user (name, email, password, date) VALUES (?,?,?,?)";
  db.query(sqlInsert, [name, email, password, date], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3333, () => {
  console.log("running on port 3333");
});
