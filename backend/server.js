//librerias
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const dbConfig = require("./db");

//variables
const app = express();
const port = process.env.PORT || 5000;

//express routes
const NoteRoute = require("./routes/notes.routes");

//conection mongoDB
mongoose.Promise = global.Promise;
mongoose
  .connect(dbConfig.db, {
    useNewUrlParser: true,
  })
  .then(
    () => {
      console.log("Database sucessfully connected!");
    },
    (error) => {
      console.log("Could not connect to database : " + error);
    }
  );

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

//ruta de note
app.use("/api", NoteRoute);

//port
const server = app.listen(port, () => {
  console.log("Hola mundo soy un CRUD, puerto " + port);
});

app.use((req, res, next) => {
  next();
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

app.get("/", (req, res) => {
  res.send("Hola mundo soy un CRUD, puerto " + port);
});
