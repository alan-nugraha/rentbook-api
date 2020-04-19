require('dotenv').config()
const user = require('../model/user');
const response = require('../helper/response');
const jwt = require('jsonwebtoken')

module.exports = {
    //Register Account
    register: (req, res) => {
        const salt = response.getRandomSalt(process.env.LENGTH_SALT)
        const passHash = response.setPass(req.body.password, salt)
        const data = {
            email: req.body.email,
            fullname: req.body.fullname,
            username: req.body.username,
            password: passHash.passHas,
            salt: passHash.salt
        }
        user.register(data)
            .then((result) => {
                response.response(res, result)
            }).catch((err) => {
                console.log(err);

                response.response(res, null, 401, "Sorry Something Wrong")
            });
    },
    //Login Account
    login: (req, res) => {
        const email = req.body.email
        const password = req.body.password

        user.getByUserEmail(email)
            .then((data) => {
                const dataUser = data[0]
                const userPass = response.setPass(password, dataUser.salt).passHas

                if (userPass === dataUser.password) {
                    dataUser.token = jwt.sign({
                        email: dataUser.email,
                        id_user: dataUser.id_user
                    }, process.env.SECRET_KEY, {
                        expiresIn: '1200s'
                    })

                    delete dataUser.salt
                    delete dataUser.password
                    return response.response(res, dataUser)
                } else {
                    return response.response(res, null, 403, "Wrong Password Or Username")
                }
            })
            .catch(() => {
                console.log(email)
                return response.response(res, null, 404, "Email Not Register")
            })
    }
}