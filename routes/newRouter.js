const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) => res.send("Hello, new!"));

module.exports = newRouter;