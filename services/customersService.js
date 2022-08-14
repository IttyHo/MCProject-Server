
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');


router.get('/getCustomers', function (req, res, next) {
    try {
        //     ---hardCoded
        res.send(
            [
                { counselorID: 0001 ,
                    counselorName: "איטי" ,
                    counselorType:"מים"
                },
                { counselorID: 0002 ,
                    counselorName: "חני" ,
                    counselorType:"מים"
                },
                { counselorID: 0003 ,
                    counselorName: "שיפי" ,
                    counselorType:"מים"
                },
                { counselorID: 0004 ,
                    counselorName: "דבורי" ,
                    counselorType:"מים"
                },
                { counselorID: 0005 ,
                    counselorName: "מירי" ,
                    counselorType:"מים"
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
