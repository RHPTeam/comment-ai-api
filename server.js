const app = require("./app");
const api = require("./src/routes");
const debug = require("debug");
const server = require("http").createServer(app);

app.use("/core/v1", api);
app.use( "/", (req, res) => {
  res.status(200).json({"data": {"isRunning": true}, "info": {"name": process.env.APP_NAME, "uid": process.env.APP_ID}, "status": "success"});
});

server.listen(process.env.APP_PORT || 3000, function () {
  debug(`Worker working on ID: ${process.pid}`);
  console.log(`Worker working on ID: ${process.pid}`);
});