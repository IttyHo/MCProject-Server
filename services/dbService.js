
const express = require('express')
const app = express()

const sqlConfig = {
  server: 'DESKTOP-5QTPEIA\\SQLEXPRESS',
  port: 1433,
  database: "MCProjects",
  //driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
};


module.exports = { sqlConfig };
