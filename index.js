const port = process.env.PORT || 3000
const express = require('express')
const app = express()

const produtos = require('./scr/produtos/produtos.json')

app.get('/produtos', (request, response) => {
    return response.json(produtos)
})





app.listen(port, () => {
    console.log(`🚀 Servidor iniciado com sucesso na porta ${port}.`)
})