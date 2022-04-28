const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
//getting database
const db = require("./Database/database.js");

//routers
const buyerRoute = require("./Routes/buyerRoute");
const sellerRoute = require("./Routes/sellerRoute");
const productRoute = require("./Routes/productRoute");
const categoryRoute = require("./Routes/categoryRoute");

//app.use
app.use(cors());
app.use(buyerRoute);
app.use(sellerRoute);
app.use(productRoute);
app.use(categoryRoute);

//listen
var server = app.listen(8080);

module.exports = server;
