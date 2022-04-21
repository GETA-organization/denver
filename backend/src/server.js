const express = require('express');
const routes = require('./routes');
const acl = require("express-acl");
const {config,responseObject} = require("./config/acl");
var cors = require('cors');

require('express-async-errors');
require('./database');

const app = express();

app.use(express.json());
app.use(cors());

acl.config(config, responseObject);
app.use(routes);

app.listen(process.env.PORT || 8089);

