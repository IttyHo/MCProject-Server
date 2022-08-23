const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8");

router.get('/getCounselor', function (req, res, next) {
       
     
       const counselorTypeReq = req.query.counselorType;
       console.log(counselorTypeReq,"counselorTypeReq");
        try {
            getCounselor().then(({recordset}) => {

            if(counselorTypeReq){
                console.log({recordset},"first");
                recordset = recordset.filter(({CounselorOfficeType}) => counselorTypeReq===CounselorOfficeType );
                console.log({recordset},"seconde");

            } 
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
    //    this.officeId=officeId;
    //    console.log(this.officeId);
  
        try {
            getCounselorDetaileByOfficeId(officeId).then(({recordset}) => {
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
      
      function getCounselorDetaileByOfficeId(officeId){
      return  sql.connect(sqlConfig).then(pool => {
            return pool.request()
            .input('OfficeId', sql.Int, officeId)
            .execute('spGetCounselorDetaileByOfficeId')
        })
        
      }

      router.get('/getCounselorsOfficeByOfficeId', function (req, res, next) {
        const {officeId}=req.query
   
         try {
             getCounselorsOfficeByOfficeId(officeId).then(({recordset}) => {
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
       
       function getCounselorsOfficeByOfficeId(officeId){
       return  sql.connect(sqlConfig).then(pool => {
             return pool.request()
             .input('OfficeId', sql.Int, officeId)
             .execute('spGetCounselorsOfficeByOfficeId')
         })
         
       }

       router.get('/getCounselorOfficeByProjectId', function (req, res, next) {
        const {projectId}=req.query
        
         try {
             getCounselorOfficeByProjectId(projectId).then(({recordset}) => {
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
       
       function getCounselorOfficeByProjectId(projectId){
       return  sql.connect(sqlConfig).then(pool => {
             return pool.request()
             .input('ProjectId', sql.Int,projectId)
             .execute('spGetCounselorOfficeByProjectId')
         })
         
       }
module.exports = router





