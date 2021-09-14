/*

  Hi! im the tuitbot api

*/

const server = require("./src/app.js");
const { conn } = require("./src/db.js");
let port= process.env.PORT||3005



conn.sync({ force: false }).then(() => {
  console.log("Loaded");
  server.listen(port, () => {
    console.log(`%s listening at ${port}`);
  });
});

