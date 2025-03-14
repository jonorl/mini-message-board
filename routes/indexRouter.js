const db = require("../db/queries");

// Load Router

const { Router } = require("express");
const indexRouter = Router();

// Optional, load express to format dates
const moment = require('moment');

indexRouter.get("/", (req, res) => {
  // Clone array and add new key values with dates and times formatted from Moment.  
    async function getUsernames(req, res) {
      const board = await db.getAllUsernames();

      board.map(brd => {

        return {
          ...board,
          formattedDate: moment(board.date).format('DD/MM/YY'),
          formattedTime: moment(board.date).format('h:mm:ssa')
        }
      });
      res.render("../views/index", { title: "Mini Messageboard", board: board });
    }
    getUsernames(req, res)
  })

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  // res.render("index", {
  //   title: "Index",
  //   usernames: usernames.map((user) => user.username).join(", "),
  // });
}

// Always export back to app.js at the end

module.exports = indexRouter;
