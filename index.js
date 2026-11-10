require("dotenv").config();

const express = require('express');
const connectDatabase = require('./config/db');
const app = express();
const PORT = process.env.PORT;