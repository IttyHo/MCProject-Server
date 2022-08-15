
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8")




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
           // Stored procedure
          return pool.request()
             // .input('input_parameter', sql.Int, value)
             // .output('output_parameter', sql.VarChar(50))
              .execute('spGetEntrepreneurs')
      })
      
  //vvvvvv
    }


module.exports = router
