// Load Router

const { Router } = require("express");
const newRouter = Router();

// GET request showing the form.ejs output

newRouter.get("/", (req, res) =>
  res.render("../views/form", { title: "New message form" })
);

// POST request getting data to variables and then pushed back to messages.

newRouter.post("/", (req, res) => {
  const messages = req.messages
  const newUser = req.body.name;
  const newMessage = req.body.message;

  messages.push({ text: newMessage, user: newUser, added: new Date() });

  // Redirect back to index when done
  res.redirect("/")
});

// Always export back to app.js at the end

module.exports = newRouter;
