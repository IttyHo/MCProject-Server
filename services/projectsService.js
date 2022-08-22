
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8")
const entrepreneurId=null

router.get('/getProject', function (req, res, next) {
  try {
    getProjects().then(({recordset}) => {
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

function getProjects(){
return  sql.connect(sqlConfig).then(pool => {
      return pool.request()
        //    .input('entrepreneurId', sql.Int, this.entrepreneurId)
         // .output('output_parameter', sql.VarChar(50))
          .execute('spGetProjects')
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
        console.log(this.entrepreneurId);
    return  sql.connect(sqlConfig).then(pool => {
          return pool.request()
               .input('EntrepreneurId', sql.Int, this.entrepreneurId)
            //  .output('output_parameter', sql.VarChar(50))
              .execute('spGetProjectByEntrepreneurId')
      })
      
    }


module.exports = router
