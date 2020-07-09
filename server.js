const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))



server.set("view engine","njk")

nunjucks.configure("views", {
    express:server
})


server.get("/", function(req, res){
    return res.render("index")

})
server.get("/sobre", function(req, res){
    return res.render("sobre")

})
server.get("/conteudo", function(req, res){
    return res.render("conteudo")

})
server.use(function(req, res) {
    res.status(404).render("not-found");
  })
  
server.listen(5000, function(){
    
})
