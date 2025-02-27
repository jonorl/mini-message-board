const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  const messages = req.messages;
  res.render("../views/index", { title: "Mini Messageboard", messages: messages });
});

module.exports = indexRouter;
