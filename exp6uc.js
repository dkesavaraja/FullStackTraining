let http=require('http');
let uc=require('upper-case');



http.createServer(function (req , res){

res.writeHead(200,{'Content-Type':'text/html'});


res.write(uc.upperCase("Welcome u all to this workshop"));


res.end();

}).listen(9000);