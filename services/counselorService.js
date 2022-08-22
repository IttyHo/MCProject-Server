
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8");


router.get('/getCounselor', function (req, res, next) {
       
  
        try {
            getCounselor().then(({recordset}) => {
              res.send(recordset) ;
                }).catch(err => {
                   console.log( err);
              }) 
          }
      catch (err){
          console.log(err);
          res.send("err");
          }
      })
      
      function getCounselor(){
      return  sql.connect(sqlConfig).then(pool => {
            return pool.request()
                .execute('spGetCounselors')
        })
        
      }

module.exports = router
