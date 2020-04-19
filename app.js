const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3001
const book = require('./src/route/book')
const user = require('./src/route/user')
const genre = require('./src/route/genre')
const logger = require('morgan')
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json())
app.use(logger('dev'));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.listen(port, () => {
    console.log("Server On Using Port", port)
})

app.use('/api/v1/genre', genre)
app.use('/api/v1', book)
app.use('/api/v1/user', user)

module.exports = app