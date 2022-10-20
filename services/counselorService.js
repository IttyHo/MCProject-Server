const express = require('express');
const router = express.Router();
const { getCustFromSQL } = require('./dbService');
const { sqlConfig } = require('./dbService');
const sql = require("mssql/msnodesqlv8");

router.get('/getCounselorOfficeType', function (req, res, next) {
  // const counselorTypeReq = req.query.counselorType;
  try {
    getCounselorOfficeType().then(({ recordset }) => {
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
function getCounselorOfficeType() {
  return sql.connect(sqlConfig).then(pool => {
    return pool.request()
      .execute('spGetCounselorOfficeType')
  })

}
router.get('/getCounselor', function (req, res, next) {
  const counselorTypeReq = req.query.counselorType;
  console.log(counselorTypeReq,"counselorTypeReq");
  try {
    getCounselor().then(({ recordset }) => {

      if (counselorTypeReq) {
        recordset = recordset.filter(({ CounselorOfficeType }) => counselorTypeReq === CounselorOfficeType);
      }
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

function getCounselor() {
  return sql.connect(sqlConfig).then(pool => {
    return pool.request()
      .execute('spGetCounselors')
  })

}

router.post('/deleteCounselor', function (req, res, next) {
  try {
      const counselor = req.body;
      console.log(counselor);
      deleteCounselor(counselor).then(() => {
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

function deleteCounselor(counselor) {
  return sql.connect(sqlConfig).then(pool => {
      const { CounselorOfficeId } = counselor;
      return pool.request()
          .input('id', sql.Int, CounselorOfficeId)         
          .execute('spDeleteCounselor')
  })

}

router.get('/getCounselorDetaileByOfficeId', function (req, res, next) {
  const { officeId } = req.query

  try {
    getCounselorDetaileByOfficeId(officeId).then(({ recordset }) => {
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

function getCounselorDetaileByOfficeId(officeId) {
  return sql.connect(sqlConfig).then(pool => {
    return pool.request()
      .input('OfficeId', sql.Int, officeId)
      .execute('spGetCounselorDetaileByOfficeId')
  })
}
router.get('/getCounselorsOfficeByOfficeId', function (req, res, next) {
  const { officeId } = req.query

  try {
    getCounselorsOfficeByOfficeId(officeId).then(({ recordset }) => {
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

function getCounselorsOfficeByOfficeId(officeId) {
  return sql.connect(sqlConfig).then(pool => {
    return pool.request()
      .input('OfficeId', sql.Int, officeId)
      .execute('spGetCounselorsOfficeByOfficeId')
  })

}

router.get('/getCounselorOfficeByProjectId', function (req, res, next) {
  const { projectId } = req.query

  try {
    getCounselorOfficeByProjectId(projectId).then(({ recordset }) => {
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

function getCounselorOfficeByProjectId(projectId) {
  return sql.connect(sqlConfig).then(pool => {
    return pool.request()
      .input('ProjectId', sql.Int, projectId)
      .execute('spGetCounselorOfficeByProjectId')
  })

}

router.post('/addCounselor', function (req, res, next) {
  try {
    const counselor = req.body;
    addCounselor(counselor).then(() => {
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
function addCounselor(counselor) {
  return sql.connect(sqlConfig).then(pool => {
    const { CounselorOfficeName, CounselorOfficeAdress, CounselorOfficePhone, CounselorOfficeType, CounselorOfficeManager, CounselorOfficeManagerPhone, CounselorOfficeManagerMail, CounselorOfficeMainSecretary, CounselorOfficeMainSecretaryPhone, CounselorOfficeMainSecretaryMail } = counselor;
    return pool.request()
      .input('CounselorOfficeName', sql.NVarChar, CounselorOfficeName)
      .input('CounselorOfficeAdress', sql.NVarChar, CounselorOfficeAdress)
      .input('CounselorOfficePhone', sql.NVarChar, CounselorOfficePhone)
      .input('CounselorOfficeType', sql.Int, CounselorOfficeType)
      .input('CounselorOfficeManager', sql.NVarChar, CounselorOfficeManager)
      .input('CounselorOfficeManagerPhone', sql.NVarChar, CounselorOfficeManagerPhone)
      .input('CounselorOfficeManagerMail', sql.NVarChar, CounselorOfficeManagerMail)
      .input('CounselorOfficeMainSecretary', sql.NVarChar, CounselorOfficeMainSecretary)
      .input('CounselorOfficeMainSecretaryPhone', sql.NVarChar, CounselorOfficeMainSecretaryPhone)
      .input('CounselorOfficeMainSecretaryMail', sql.NVarChar, CounselorOfficeMainSecretaryMail)

      .execute('spAddCounselor')
  })
}

router.post('/addCounselorType', function (req, res, next) {
  try {
    const counselorType = req.body;
    console.log(counselorType,"ct");
    addCounselorType(counselorType).then(() => {
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
function addCounselorType(counselorType) {
  return sql.connect(sqlConfig).then(pool => {
    const cunselorType=counselorType.counselorType
    return pool.request()
      .input('TypeName', sql.NVarChar, cunselorType)
      .execute('spAddCounselorType')
  })
}
module.exports = router





