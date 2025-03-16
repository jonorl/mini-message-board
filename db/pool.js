const { Pool } = require("pg");
// const USER = process.env.USER
// const PASSWORD = process.env.PASSWORD

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity

console.log(process.env.DATABASE_URL);
module.exports = new Pool({
  // host: "localhost", // or wherever the db is hosted
  // user: USER,
  // database: "messages",
  // password: PASSWORD,
  // port: 5432 // The default port
  connectionString: process.env.DATABASE_URL,
});
