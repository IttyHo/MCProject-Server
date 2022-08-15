
const express = require('express')
const app = express()
 


const sqlConfig = {
  server: '.',
  port: 1433,
  database: "MCProject",
  //driver: "msnodesqlv8",
  options: {
    trustedConnection: true
  }
  //aaaaaaaaaaaaa
};


module.exports = { sqlConfig };
