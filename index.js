const express = require('express');

const server = express()

const PORT = 3000; 

server.use(express.json());

server.listen(PORT, ()=> {
console.log('listening  on 3000')
})


const recipes = require('./api/recipes')

server.use('/recipes', recipes)
module.exports = server;
