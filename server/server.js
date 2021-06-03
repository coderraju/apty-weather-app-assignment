const express = require('express')
const app = express();
const port = 8080;
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors");
const router=require('./routes/weather');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Header",
    "X-Requested-With, content-type, Authorization"
  );
  res.setTimeout(300000, function() {
    res.status(408).json({ success: false, message: "Request has timed out." });
  });
  next();
});

app.use(cors());
app.use(router);

app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});