const express = require('express')
const route = express.Router()
const genre = require('../controller/genre')
const auth = require('../helper/auth')

route

    .get('/', genre.getGenre)
    .post('/addGenre', genre.addGenre)
    .patch('/:id', genre.updateGenre)
    .delete('/:id', genre.deleteGenre)

module.exports = route