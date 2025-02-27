require("dotenv").config();

const express = require("express");
const app = express();
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

const PORT = process.env.PORT || 3000;

const messages = [
  {
    text: "Hi there!",
    user: "Armando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

app.use((req, res, next) => {
  req.messages = messages;
  next(); 
});

app.use("/", indexRouter);

app.use("/new", newRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
