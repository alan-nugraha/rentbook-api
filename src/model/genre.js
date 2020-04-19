const connection = require('../config/db');

module.exports = {
    getAllGenre: () => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT * FROM genres`, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    addGenre: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO genres SET ?`, [data], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    updateGenre: (newData, id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE genres SET ? WHERE id_genre = ?`, [newData, id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    deleteGenre: (id) => {
        console.log(id)
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM genres WHERE id_genre = ?`, id, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
}