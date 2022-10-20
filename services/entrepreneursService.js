const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const { sqlConfig } = require('./dbService');
const sql = require("mssql/msnodesqlv8")

router.post('/addEntrepreneur', function (req, res, next) {
    try {
        const entrepreneur = req.body;
        addEntrepreneur(entrepreneur).then(() => {
            res.send(true);
        }).catch(err => {
            console.log(err);
            res.send(false);
        })
    }
    catch (err) {
        console.log(err);
        res.send("err");
    }
})

router.post('/deleteEntrepreneur', function (req, res, next) {
    try {
        const entrepreneur = req.body;
        // console.log(entrepreneur);
        deleteEntrepreneur(entrepreneur).then(() => {
            res.send(true);
        }).catch(err => {
            console.log(err);
            res.send(false);
        })
    }
    catch (err) {
        console.log(err);
        res.send("err");
    }
})

router.get('/getEntrepreneur', function (req, res, next) {
    try {
        getEntrepreneur().then(({ recordset }) => {
            res.send(recordset);
        }).catch(err => {
            console.log(err);
        })
    }
    catch (err) {
        res.send([]);
    }

})

function getEntrepreneur() {

    return sql.connect(sqlConfig).then(pool => {
        return pool.request()
            // . input('OfficeId', sql.Int, officeId)
            // .output('output_parameter', sql.VarChar(50))
            .execute('spGetEntrepreneurs')
    })

}
router.get('/getProjectByEntrepreneurId', function (req, res, next) {
    const { entrepreneurId } = req.query;

    try {
        getProjectByEntrepreneurId(entrepreneurId).then(({ recordset }) => {
            res.send(recordset);
        }).catch(err => {
            console.log(err);
        })
    }
    catch (err) {
        console.log(err);
        res.send("err");
    }
})

function getProjectByEntrepreneurId(entrepreneurId) {
    return sql.connect(sqlConfig).then(pool => {
        return pool.request()
            .input('EntrepreneurId', sql.Int, entrepreneurId)
            .execute('spGetProjectByEntrepreneurId')
    })

}
function deleteEntrepreneur(entrepreneur) {
    return sql.connect(sqlConfig).then(pool => {
        const { EntrepreneurId } = entrepreneur;
        return pool.request()
            .input('id', sql.Int, EntrepreneurId)         
            .execute('spDeleteEntrepreneur')
    })

}
function addEntrepreneur(entrepreneur) {
    return sql.connect(sqlConfig).then(pool => {
        const { EntrepreneurCompany, EntrepreneurName, EntrepreneurPhone, EntrepreneurCompanyAddress
            , EntrepreneurCompanyAddressToSend, EntrepreneurCompanyPhone,
            EntrepreneurCompanyFax, EntrepreneurCompanyMail, EntrepreneurMail, OfficeAdress
            , EntrepreneurSecretary, EntrepreneurSecretaryPhone,
            EntrepreneurSecretaryMail } = entrepreneur;
        return pool.request()
            .input('EntrepreneurName', sql.NVarChar, EntrepreneurName)
            .input('EntrepreneurCompany', sql.NVarChar, EntrepreneurCompany)
            .input('EntrepreneurPhone', sql.NVarChar, EntrepreneurPhone)
            .input('EntrepreneurMail', sql.NVarChar, EntrepreneurMail)
            .input('OfficeAdress', sql.NVarChar, OfficeAdress)
            .input('EntrepreneurSecretary', sql.NVarChar, EntrepreneurSecretary)
            .input('EntrepreneurSecretaryPhone', sql.NVarChar, EntrepreneurSecretaryPhone)
            .input('EntrepreneurSecretaryMail', sql.NVarChar, EntrepreneurSecretaryMail)
            .input('EntrepreneurCompanyAddress', sql.NVarChar, EntrepreneurCompanyAddress)
            .input('EntrepreneurCompanyAddressToSend', sql.NVarChar, EntrepreneurCompanyAddressToSend)
            .input('EntrepreneurCompanyPhone', sql.NVarChar, EntrepreneurCompanyPhone)
            .input('EntrepreneurCompanyFax', sql.NVarChar, EntrepreneurCompanyFax)
            .input('EntrepreneurCompanyMail', sql.NVarChar, EntrepreneurCompanyMail)

            .execute('spAddEntrepreneur')
    })

}
module.exports = router
