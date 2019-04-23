var net = require("net")
var server = net.createServer((conn) => {
  console.log("\033[90m new connection!\033[39m")
})

server.listen(3000,() => {
  console.log("\033[90m server listening on*:3000!\033[39m")
})

require("http").createServer((req,res) => {
  res.writeHead(200,{"Content-Type": "text/html"})
  res.end("Hello <b>World</b>")
}).listen(3000)