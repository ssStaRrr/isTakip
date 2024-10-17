const Admin = require("../model/admin")

const login = async(req,res) => {
    let {username, password} = req.body
    let admin = await Admin.findOne({username:username, password:password})
    if(admin){
        res.status(200).json({
            username,   
            message: "Giris Başarılı"
        })
    }else {
        res.status(404).json({
            username,
            message: "Giriş başarısız"
        })
    }
}

module.exports = {
    login
}