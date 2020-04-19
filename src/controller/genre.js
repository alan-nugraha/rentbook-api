const genre = require('../model/genre')
const helper = require('../helper/response')

module.exports = {
    getGenre : (req, res) => {
        genre.getAllGenre().then(result => {
            helper.response(res, result)
        }).catch((err)=>{
            console.log(err)
            helper.response(res,null,404,"Data Not Found")
        })
    },
    addGenre : (req, res) => {
        const data = {
            name_genre : req.body.name_genre
        }
        genre.addGenre(data).then(result => {
            helper.response(res, result)
        }).catch((err) => {
            console.log(err)
            helper.response(res,null,401,"Something Error")
        })
    },
    updateGenre : (req, res) => {
        const newData = {
            name_genre :req.body.name_genre
        }
        const id = req.params.id
        genre.updateGenre(newData, id).then(result => {
            helper.response(res, result)
        }).catch((err) => {
            console.log(err)
            helper.response(res,null,404,"Data Not Found")
        })
    },
    deleteGenre : (req, res) => {
        const id = req.params.id
        console.log(id)
        genre.deleteGenre(id).then(result => {
            helper.response(res,result)
        }).catch((err) => {
            console.log(err)
            helper.response(res,null,404,"Data Not Found")
        })
    }
}