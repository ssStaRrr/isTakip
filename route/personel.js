const express = require("express")
const router = express.Router()

const {addPersonel, getPersonelList} = require("../controller/personel")

router.post("/addPersonel", addPersonel)
router.get("/getPersonelList", getPersonelList)

module.exports = router 