// Load Router

const { Router } = require("express");
const indexRouter = Router();

// Optional, load express to format dates
const moment = require('moment');

indexRouter.get("/", (req, res) => {

  // Clone array and add new key values with dates and times formatted from Moment.  
  const messagesFormattedDates = req.messages.map(message => {
    return {
      ...message,
      formattedDate: moment(message.added).format('DD/MM/YY'),
      formattedTime: moment(message.added).format('h:mm:ssa')
    };
  });

  res.render("../views/index", { title: "Mini Messageboard", messagesFormattedDates: messagesFormattedDates });
});

// Always export back to app.js at the end

module.exports = indexRouter;
