
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const {sqlConfig}=require('./dbService'); 
const sql = require("mssql/msnodesqlv8")
const fs = require('fs');
const path = require('path');
const { getConfig } = require('./configService');

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

router.post('/addProject', function (req, res, next) {
    try {
      const project = req.body;
      addProject(project).then(() => {
          res.send(true) ;
            }).catch(err => {
               console.log( err);
               res.send(false) ;
          }) 
      }
  catch (err){
      console.log(err);
      res.send("err");
      }
  })

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
router.get('/getProjectById', function (req, res, next) {
        const {projectId} = req.query;
        console.log({projectId});
  
        try {
          getProjectById(projectId).then(({recordset}) => {
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
      
  function getProjectById(projectId){
      return  sql.connect(sqlConfig).then(pool => {
            return pool.request()
                 .input('id', sql.Int, projectId)
                .execute('spGetProjectById')
        })
        
      }
  function getProjects(){
        return  sql.connect(sqlConfig).then(pool => {
            return pool.request()
                .execute('spGetProjects')
        })
      
  }
  function getProjectByEntrepreneurId(){
    console.log(this.entrepreneurId);
        return  sql.connect(sqlConfig).then(pool => {
         return pool.request()
           .input('EntrepreneurId', sql.Int, this.entrepreneurId)
        //  .output('output_parameter', sql.VarChar(50))
          .execute('spGetProjectByEntrepreneurId')
  })
  
  }

  function addProject(project){
    saveProjectInRova(project);
    return  sql.connect(sqlConfig).then(pool => {
        const {ProjectName,ProjectCompany,ProjectAdress,ProjectType,ProjectRova,EntrepreneurId} = project;
        return pool.request()
        .input('ProjectName', sql.NVarChar, ProjectName)
        .input('ProjectCompany', sql.NVarChar, ProjectCompany)
        .input('ProjectAdress', sql.NVarChar, ProjectAdress)
        .input('ProjectType', sql.Int, ProjectType)
        .input('ProjectRova', sql.NVarChar, ProjectRova)
        .input('EntrepreneurId', sql.Int, EntrepreneurId)
        .execute('spAddProject')
    })
  
}

function saveProjectInRova(project) { 
 try{
    getConfig().then (
        (config) => {
            const dir =config.PROJECT_DIR;

            // check if directory exists
            if (!fs.existsSync(dir)) {
                console.log('Directory not exists!');
            } else {
                const newFolder = path.join(dir,getRovaName(project.ProjectRova))
                const inNewFolder= path.join(newFolder,project.ProjectName)

                if (!fs.existsSync(newFolder)) {
                    fs.mkdirSync(newFolder);
                    // if(!fs.existsSync(inNewFolder)) {
                        fs.mkdirSync(inNewFolder);}
                    // }
                        else{
                        if (!fs.existsSync(inNewFolder)) {
                            fs.mkdirSync(inNewFolder);}
                        else{
                       console.log("your project is not a new project");     
                        }
                            if (!fs.existsSync(inNewFolder)) {
                                fs.mkdirSync(inNewFolder);}
                        }
                    }
               }                   
         )
    }
    catch(ex){
        console.error(ex.message)
    }
}

function getRovaName(rova){
    return `רובע ${rova}`
}
module.exports = router
