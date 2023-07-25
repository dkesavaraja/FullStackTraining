
let http = require("http");

http.createServer(function (req ,res)

{

res.writeHead(200,{'Content-Type':'text/plain'});
res.end("My First Web Program");
}).listen(9090, ()=>console.log("My web Server is running on 9090"));