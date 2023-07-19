const express = require("express");
const bodyParser = require("body-parser");
const connect = require("./config/db");
var cors = require("cors");
require("dotenv").config();
const app = express();

//connect to mongodb
connect();

app.use(cors());
app.use(bodyParser.json());

const port = 3007;
app.listen(port, () => console.log(`Server is running on port ${port}`));
