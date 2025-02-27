// Load Router

const { Router } = require("express");
const messageRouter = Router();

// GET request showing the form.ejs output

messageRouter.get("/", (req, res) => {
  const params = req.query;

  res.render("../views/message", {
    title: "Message details",
    user: params.user,
    date: params.date,
    time: params.time,
    message: params.message,
  });
});

// Always export back to app.js at the end

module.exports = messageRouter;
