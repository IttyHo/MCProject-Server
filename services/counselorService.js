
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8");
const officeId=null;

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

      router.get('/getCounselorDetaileByOfficeId', function (req, res, next) {
       const {officeId}=req.query
       this.officeId=officeId;
       console.log(this.officeId);
  
        try {
            getCounselorDetaileByOfficeId().then(({recordset}) => {
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
      
      function getCounselorDetaileByOfficeId(){
      return  sql.connect(sqlConfig).then(pool => {
            return pool.request()
            .input('OfficeId', sql.Int, this.officeId)
            .execute('spGetCounselorDetaileByOfficeId')
        })
        
      }

module.exports = router
