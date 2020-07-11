const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))



server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})


server.get("/", function (req, res) {
    return res.render("index")

})
server.get("/sobre", function (req, res) {
    return res.render("sobre")

})
server.get("/conteudo", function (req, res) {
    return res.render("conteudo", { items: courses })

})
server.get("/courses/:id", function (req, res) {
    const id = req.params.id

    return res.render("courses", { id })
});

server.use(function (req, res) {
    res.status(404).render("not-found");
})



server.listen(5000, function () {

})
