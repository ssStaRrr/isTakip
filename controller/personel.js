const Personel = require("../model/personel")

const addPersonel = async(req,res) => {
    const personel = req.body
    personel.department = "670d61f2fdebb181fcdb731f"
 
    const newPersonel = new Personel(personel)
    await newPersonel.save()

    res.status(200).json(newPersonel)
}

const getPersonelList = async(req,res) => {
    const personelList = await Personel.find()

    res.status(200).json(personelList)
}

module.exports = {
    addPersonel,
    getPersonelList
}