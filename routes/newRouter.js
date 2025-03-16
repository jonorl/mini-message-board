// Load Router

const db = require("../db/queries");
const { Router } = require("express");
const newRouter = Router();

// GET request showing the form.ejs output

newRouter.get("/", (req, res) =>
  res.render("../views/form", { title: "New message form" })
);

// POST request getting data to variables and then pushed back to messages.

newRouter.post("/", (req, res) => {
  const newUser = req.body.name;
  const newMessage = req.body.message;

  // transform this line to SQL
  // messages.push({ text: newMessage, user: newUser, added: new Date() });

  async function postMessage(req, res) {
    await db.insertMessage(newUser, newMessage);

    // Redirect back to index when done
    res.redirect("/");
  }
  postMessage(req, res)
});

// Always export back to app.js at the end

module.exports = newRouter;
