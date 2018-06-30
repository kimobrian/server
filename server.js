/* eslint-disable no-console */
const express = require("express");
const http = require("http");
require("dotenv").config();

/**
 * Normalize a port into a number, string, or false.
 */
/* istanbul ignore next */
function normalizePort (val) {
  const port = parseInt(val, 10);

  // named pipe
  if (isNaN(port)) return val;

  // port number
  if (port >= 0) return port;

  return false;
}


let port = normalizePort(process.env.PORT || 4245);

let app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let router=express.Router();

/**
 * Default welcome route
 */
router.get("/", (req, res)=> {
  res.json({ message: "Welcome to the Assessment API"});
});

/** 
 * Include routes to serve assessment info
*/
require("./assessments")(router);

app.use("/v1/", router);
/** 
 * Error handling middleware
*/
/* istanbul ignore next */
app.use((err, req, res, next)=> {
  res.status(500).send({ error: "An error Occurred" });
  next();
});
/* istanbul ignore next */
if(!module.parent) {
  server.listen(port, onListening);  
}

/**
 * Event listener for HTTP server "error" event.
*/
/* istanbul ignore next */
function onError (error) {
  if (error.syscall !== "listen") throw error;

  const bind = typeof port === "string"
    ? "Pipe " + port
    : "Port " + port;

  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated permissions");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
*/
/* istanbul ignore next */
function onListening () {
  const addr = server.address();
  const bind = typeof addr === "string"
    ? "pipe " + addr
    : "port " + addr.port;
  console.log(`Server running on port: ${bind}`); 
}

server.on("error", onError);

module.exports = app;


