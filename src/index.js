const http = require('http')
const fs = require('fs')

const hostname = "127.0.0.1"
const port = "5846"

const server = http.createServer((req, res)=>{
    fs.readFile('src/index.html', (err, data)=>{
        res.writeHead(200, {'Content-Type':'text/html'})
        res.write(data)

        return res.end()
    })
})

server.listen(port, hostname, ()=>{
    console.log("Servidor esta rodando.")
})

//criar novo arquivo
/* fs.writeFile('src/danki.txt', 'teste danki code', (err)=>{
    if(err) throw err;
    console.log('O arquivo foi criado com sucesso!')
}) */

//cria novo arquivo ou insere os dados em um existente.
/* fs.appendFile('src/danki.txt', '\n outro conteudo', (err)=>{
    if(err) throw err;
    console.log('Criado ou editado com sucesso!')
}) */

//ler arquivo
/* fs.readFile('src/danki.txt', (err, data)=>{
    console.log(data.toString())
}) */

//deletar arquivo
/* fs.unlink('src/danki.txt', (err)=>{
    console.log('Arquivo deletado.')
}) */

//Renomear arquivo
/* fs.rename('src/dakicodee.txt', 'src/renomeado.txt', (err)=>{
    console.log('O arquivo foi renomeado.')
}) */