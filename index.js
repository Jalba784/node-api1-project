const express = require("express");
const db = require("./database");

// Server instance
const server = express();

// Middleware
server.use(express.json());

