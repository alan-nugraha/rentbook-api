const book = require('../model/book')
const helper = require('../helper/response')
module.exports = {
    getBook: (req, res) => {
        const page = parseInt(req.query.page) || 1
        const search = req.query.search || ''
        const sortBy = req.query.sortBy || 'id_book'
        const sort = req.query.sort || 'ASC'
        const limit = parseInt(req.query.limit) || 6
        const offset = (page - 1) * limit

        book.getBookCount().then(result => {
            let total = result[0].TotalBooks
            // console.log('total books:', total);
            const prevPage = page === 1 ? 1 : page - 1;
            const nextPage = page === total ? total : page + 1;
            console.log(offset)
            book.getAllBook(search, sortBy, sort, offset, limit)
                .then(data => {
                    //   res.json(result);
                    let pageDetail = {
                        total: Math.ceil(total),
                        per_page: limit,
                        current_page: page,
                        nextLink: `http://localhost:3001${req.originalUrl.replace('page=' + page, 'page=' + nextPage)}`,
                        prevLink: `http://localhost:3001${req.originalUrl.replace('page=' + page, 'page=' + prevPage)}`
                    }
                    if (data[0] !== undefined) {
                        helper.responsePagination(res, 'OK', 200, false, pageDetail, data)
                    } else {
                        helper.responsePagination(res, 'Data is not found', 404, true, pageDetail, data)
                    }
                    // console.log(data[0])
                })
                .catch(error => {
                    helper.response(res, null, 404, "Data is not found");
                    console.log(error);
                });
        }).catch(error => {
            helper.response(res, null, 404, "Data is not found");
            console.log(error);
        });
    },
    rentBook: (req, res) => {
        let available = req.body.available
        let idbook = req.params.idbook
        book.getBookbyID(idbook).then(result => {
            // console.log(result[0].available)
            if (result[0].available !== "false") {
                book.rentBook(available, idbook).then(result => {
                    helper.response(res, result)
                }).catch(err => {
                    console.log(err)
                    helper.response(res, null, 401, "Something Wrong")
                })
            } else {
                helper.response(res, result)
                console.log("Book has been borrowed")
            }
        }).catch(err => {
            console.log(err)
            helper.response(res, null, 401, "Something Wrong")
        })
    },
    returnBook: (req, res) => {
        let available = req.body.available
        let idbook = req.params.idbook
        book.getBookbyID(idbook).then(result => {
            if (result[0].available !== "true") {
                book.returnBook(available, idbook).then(result => {
                    helper.response(res, result)
                }).catch(err => {
                    console.log(err)
                    helper.response(res, null, 401, "Something Wrong")
                })
            } else {
                helper.response(res, result)
                console.log("Book has been returned")
            }
        }).catch(err => {
            console.log(err)
            helper.response(res, null, 401, "Something Wrong")
        })
    },
    getBookbyID: (req, res) => {
        const idbook = req.params.idbook
        book.getBookbyID(idbook)
            .then((result) => {
                helper.response(res, result)
            })
            .catch((err) => {
                console.log(err)
                helper.response(res, null, 404, "Not Found")

            })
    },
    addBook: (req, res) => {
        let data = {
            title: req.body.title,
            description: req.body.description,
            img: req.body.img,
            released_date: req.body.released_date,
            available: req.body.available,
            id_genre: req.body.id_genre
        }

        book.addBook(data)
            .then((result) => {
                helper.response(res, result)
            })
            .catch((err) => {
                console.log(err)
                helper.response(res, null, 401, "Something Wrong")

            })
    },
    updateBook: (req, res) => {
        const idbook = req.params.idbook
        const data = {
            title: req.body.title,
            description: req.body.description,
            img: req.body.img,
            released_date: req.body.released_date,
            available: req.body.available,
            id_genre: req.body.id_genre
        }
        // console.log(data)
        book.updateBook(data, Number(idbook))
            .then((result) => {
                helper.response(res, result)
            })
            .catch((err) => {
                console.log(err)
                helper.response(res, null, 404, "Id Book No found")
            })
    },
    deleteBook: (req, res) => {
        const idbook = req.params.idbook
        console.log(idbook)
        book.deleteBook(Number(idbook))
            .then((result) => {
                helper.response(res, result)
            })
            .catch((err) => {
                console.log(err)
                helper.response(res, null, 404, "Id Book No found")
            })
    },
    getBookByGenre: (req, res) => {
        const id_genre = req.params.id_genre;
        book.bookByGenre(id_genre)
            .then(result => {
                helper.response(
                    res,
                    result,
                )
            })
            .catch(err => {
                helper.response(
                    res, null, 404,
                    `Genre with id: ${id_genre} is not found`,

                )
            })
    }
}