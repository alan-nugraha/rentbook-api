const connection = require('../config/db');

module.exports = {
    getBookCount: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT COUNT(*) as TotalBooks FROM book', (err, result) => {
                if (!err) {
                    resolve(result)
                } else (new Error(err))
            })
        })
    },
    getAllBook: (search, sortBy, sort, offset, limit) => {
        // console.log(sortBy);
        // console.log(sort);
        return new Promise((resolve, reject) => {
            connection.query(`SELECT b.*, g.name_genre as genre FROM book b INNER JOIN genres g ON b.id_genre = g.id_genre WHERE title LIKE CONCAT('%',?,'%') ORDER BY ${sortBy} ${sort} LIMIT ?, ?`, [search, offset, limit], (error, result) => {
                if (!error) {
                    // console.log(result)
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            });
        });
    },
    getBookbyID: (idbook) => {
        return new Promise((resolve, reject) => {
            connection.query(`SELECT b.*, g.name_genre as genre FROM book b INNER JOIN genres g ON b.id_genre = g.id_genre WHERE id_book = ${idbook}`, (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    rentBook: (available, id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE book SET available = ? WHERE id_book = ?`, [available, id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    returnBook: (available, id) => {
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE book SET available = ? WHERE id_book = ?`, [available, id], (error, result) => {
                if (!error) {
                    resolve(result);
                } else {
                    reject(new Error(error))
                }
            })
        })
    },
    addBook: (data) => {
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO book SET ?`, data, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    updateBook: (data, idBook) => {
        // console.log(id)
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE book SET ? WHERE id_book = ?`, [data, idBook], (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    deleteBook: (idbook) => {
        console.log(idbook)
        return new Promise((resolve, reject) => {
            connection.query(`DELETE FROM book WHERE id_book = ?`, idbook, (err, result) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    },
    bookByGenre: id_genre => {
        return new Promise((resolve, reject) => {
            connection.query(
                `SELECT * FROM book WHERE id_genre = ?`,
                [id_genre],
                (err, result) => {
                    if (!err) {
                        resolve(result)
                    } else {
                        reject(new Error(err))
                    }
                }
            )
        })
    }
    // sortBookByTitle : () =>{
    //     return new Promise ((resolve, reject) =>{
    //         connection.query('SELECT * FROM book ORDER BY title', (err, result) =>{
    //             if(!err){
    //                 resolve(result)
    //             } else {
    //                 reject (new Error(err))
    //             }
    //         })
    //     })
    // },

}