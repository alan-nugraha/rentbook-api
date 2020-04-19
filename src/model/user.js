const connection = require('../config/db');
module.exports = {
    register: (data) => {
        console.log(data);

        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user SET ?', data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    getByUserEmail: (email) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT id_user,email, fullname, salt, password FROM user WHERE email = ?', email, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })

        })
    },
}