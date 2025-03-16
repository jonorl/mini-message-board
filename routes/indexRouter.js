const db = require("../db/queries");

// Load Router

const { Router } = require("express");
const indexRouter = Router();

// Optional, load express to format dates
const moment = require("moment");

indexRouter.get("/", (req, res) => {
  // Clone array and add new key values with dates and times formatted from Moment.
  async function getUsernames(req, res) {
    let board = await db.getAllUsernames();

    function addKeyValuePair(data) {
      return data.map(obj => ({ ...obj, formattedDate: moment(obj.date).format("DD/MM/YY"), formattedTime: moment(obj.date).format("h:mm:ssa"),}));
    }
    const modifiedBoard = addKeyValuePair(board);

    res.render("../views/index", { title: "Mini Messageboard", board: modifiedBoard });
  }
  getUsernames(req, res);
});

// Always export back to app.js at the end

module.exports = indexRouter;
