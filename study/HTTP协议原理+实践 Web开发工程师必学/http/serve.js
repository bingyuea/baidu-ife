 const http = require("http")
const fs = require("fs")

http.createServer((request,response) => {
  console.log("request come",request.url)
  
  
  if(request.url === "/"){
    const html = fs.readFileSync("test.html","utf8")
    response.writeHead(200,{
      // node自动添加
      "Content-Type" : "text/html"
    })
    response.end(html)
  }
  
  if(request.url === "/script.js"){
    const html = fs.readFileSync("test.html","utf8")
    response.writeHead(200,{
      // node自动添加
      "Content-Type" : "text/javascript",
    })
    response.end('console.log("script loaded")')
  }
  
}).listen(8887)

console.log("listening")