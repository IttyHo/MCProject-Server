
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8");
const officeId=null;
const projectId=null;

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


      router.get('/getCounselorsOfficeByOfficeId', function (req, res, next) {
        const {officeId}=req.query
        this.officeId=officeId;
        console.log(this.officeId);
   
         try {
             getCounselorsOfficeByOfficeId().then(({recordset}) => {
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
       
       function getCounselorsOfficeByOfficeId(){
       return  sql.connect(sqlConfig).then(pool => {
             return pool.request()
             .input('OfficeId', sql.Int, this.officeId)
             .execute('spGetCounselorsOfficeByOfficeId')
         })
         
       }

       router.get('/getCounselorOfficeByProjectId', function (req, res, next) {
        const {projectId}=req.query
        this.projectId=projectId;
        console.log(this.projectId);
   
         try {
             getCounselorOfficeByProjectId().then(({recordset}) => {
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
       
       function getCounselorOfficeByProjectId(){
       return  sql.connect(sqlConfig).then(pool => {
             return pool.request()
             .input('ProjectId', sql.Int, this.projectId)
             .execute('spGetCounselorOfficeByProjectId')
         })
         
       }
module.exports = router
