const Personel = require("../model/personel")
const Department = require("../model/department")

const addPersonel = async(req,res) => {
    const personel = req.body
    console.log(personel)
    const department = await Department.findOne({name: personel.department})

    personel.department = department._id
    const newPersonel = new Personel(personel)
    await newPersonel.save()

    res.status(200).json(newPersonel)
}

const getPersonelList = async(req,res) => {
    const personelList = await Personel.find().populate('department', 'name');
    console.log(personelList)
    res.status(200).json(personelList)
}

const selectPersonel = async(req,res) => {
    const personelsInfo = req.query
    const personels = await Personel.find(personelsInfo)
    res.status(200).json(personels)
}

const deletePersonel = async(req,res) => {
    const _id = req.body
    const personel = await Personel.findByIdAndDelete(_id)
}

module.exports = {
    addPersonel,
    getPersonelList,
    selectPersonel,
    deletePersonel
}