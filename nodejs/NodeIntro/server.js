const http = require('http')
const port = 8090

const server = http.createServer((req , res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end("Hello Nodejs!!!!!")
})

server.listen(port , (err) => {
  !err ? console.log(`Server start on port ${port}`) : null  
})