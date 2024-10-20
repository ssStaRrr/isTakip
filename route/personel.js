const express = require("express")
const router = express.Router()
const {addPersonel, getPersonelList, selectPersonel, deletePersonel} = require("../controller/personel")

router.post("/addPersonel", addPersonel)
router.get("/getPersonelList", getPersonelList)
router.get("/selectPersonel", selectPersonel)
router.post("/deletePersonel", deletePersonel)

module.exports = router 