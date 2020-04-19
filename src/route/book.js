const express = require('express')
const route = express.Router()
const book = require('../controller/book')
const auth = require('../helper/auth')

route

    .get('/', book.getBook)
    .get('/:idbook', book.getBookbyID)
    .get('/genres/:id_genre', book.getBookByGenre)
    .post('/addbook', book.addBook)
    .patch('/:idbook', book.updateBook)
    .patch('/rentbook/:idbook', book.rentBook)
    .patch('/returnbook/:idbook', book.returnBook)
    .delete('/:idbook', book.deleteBook)


module.exports = route