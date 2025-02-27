const { Router } = require("express");

const newRouter = Router();

newRouter.get("/", (req, res) =>
  res.render("../views/form", { title: "New message form" })
);

newRouter.post("/", (req, res) => {
  const messages = req.messages
  const newUser = req.body.name;
  const newMessage = req.body.message;
  messages.push({ text: newMessage, user: newUser, added: new Date() });
  res.redirect("/")
});

module.exports = newRouter;
