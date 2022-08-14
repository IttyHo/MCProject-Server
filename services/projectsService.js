
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');


router.get('/getProject', function (req, res, next) {
    try {
        //     ---hardCoded
        res.send(
            [
                { projectID: 10001 ,
                    projectCompany:"MC רימונים",
                    projectName: "מיכקשוילי 15" ,
                    projectMail:"itty1788@gmail.com",
                    projectPhone: "0527627574" ,
                    projectAddress:"מיכקשוילי 15",
                    projectSecretary:"אורטל",
                    projectType:'תב"ע בלבד',

                },
                { projectID: 10002 ,
                    projectCompany:"MC פרויקטים",
                    projectName: "חומות רובע ז" ,
                    projectMail:"chomotrovaz@mcprojects.co.il",
                    projectPhone: "0534155166" ,
                    projectAddress:"אברהם שפירא 1",
                    projectSecretary:"הודיה",
                    projectType:'תב"ע בלבד',


                },
                { projectID: 10003 ,
                    projectCompany:"בית יוסף",
                    projectName: "נתן אלבז 24",
                    projectMail:"natanElbaz24@gmail.com",
                    projectPhone: "088658615" ,
                    projectAddress:"נתן אלבז 24",
                    projectSecretary:"נורית",             
                    projectType:'תב"ע +אישורים',


                },
               
            ]
        )

        //      ---SQL
        // getCustFromSQL(name).then(({ recordset }) => {
        //     res.send(recordset)
        // }).catch(err => {
        //     console.log(err);
        // })
        
    }
    catch (err) {
        res.send([]);
    }
})

module.exports = router
