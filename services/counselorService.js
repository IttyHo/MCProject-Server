
const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');


router.get('/getCounselor', function (req, res, next) {
    try {
        console.log(req)
       const counselorTypeReq = req.query.counselorType;
       let counselors =      [
        { counselorID: 10001 ,
            counselorName: "אלאנורה פסקון" ,
            counselorType:"אינסטלציה"
        },
        { counselorID: 10002 ,
            counselorName: "כדאי בטיחות" ,
            counselorType:"חשמל"
        },
        { counselorID: 10003 ,
            counselorName: "כדאי בטיחות" ,
            counselorType:"בטיחות"
        },
        { counselorID: 10004 ,
            counselorName: "דלוריס קצמן" ,
            counselorType:"תנועה"
        },
        { counselorID: 10005 ,
            counselorName: "יאנה מינץ" ,
            counselorType:"מיזוג אויר"
        },
        { counselorID: 10006 ,
            counselorName: "ליאת טבאשי" ,
            counselorType:"פיתוח"
        },
        { counselorID: 10007 ,
            counselorName: "דמיטרי שמוקלר" ,
            counselorType:"קונסטרוקציה"
        },
        { counselorID: 10008 ,
            counselorName: "ריטה" ,
            counselorType:"פיתוח"
        },
        ]
        if(counselorTypeReq){
            counselors = counselors.filter(({counselorType}) => counselorTypeReq===counselorType );
        } 
        res.send(counselors )

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
