console.log("test1");
console.log("test2");
console.log("test3");


console.log("test1");
setImmediate(console.log("test2"),1500);
console.log("test3");