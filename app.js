const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
const logger = require("morgan");
const express = require("express");
const app = express();

env.config({path: ".env"});

app.use(cors());
app.use(bodyParser.json({limit: "500MB", extended: true}));
app.use(bodyParser.urlencoded({limit: "500MB", extended: true}));
app.use(logger("dev"));

module.exports = app;