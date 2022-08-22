const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8")
const entrepreneurId=null

router.get('/getEntrepreneur', function (req, res, next) {
    try {
        getEntrepreneur().then(({recordset}) => {
            res.send(recordset) ;
        }).catch(err => {
            console.log( err);
        }) 
    }
    catch (err){
        res.send([]);
    }
   
})

function getEntrepreneur(){
  
    return  sql.connect(sqlConfig).then(pool => {
          return pool.request()
               // . input('OfficeId', sql.Int, officeId)
             // .output('output_parameter', sql.VarChar(50))
              .execute('spGetEntrepreneurs')
      })
      
    }
    router.get('/getProjectByEntrepreneurId', function (req, res, next) {
        const {entrepreneurId} = req.query;
        this.entrepreneurId=entrepreneurId
        console.log(this.entrepreneurId);
  
        try {
          getProjectByEntrepreneurId().then(({recordset}) => {
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
      
      function getProjectByEntrepreneurId(){
      return  sql.connect(sqlConfig).then(pool => {
            return pool.request()
                 .input('EntrepreneurId', sql.Int, this.entrepreneurId)
                .execute('spGetProjectByEntrepreneurId')
        })
        
      }

module.exports = router
