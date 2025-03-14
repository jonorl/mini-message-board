const { ppid } = require("process");
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM board");
  return rows;
}

module.exports = {
    getAllUsernames,
  };