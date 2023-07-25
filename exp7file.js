let fs=require('fs');

let rdata=fs.createReadStream('./k7.txt');

rdata.on('open',function(){
console.log("File is ready");
});