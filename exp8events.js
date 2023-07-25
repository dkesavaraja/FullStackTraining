let e=require('events');
let eh=new e.EventEmitter();

let myhandler=  function() {

console.log("test");

}

eh.on('demo', myhandler);

eh.emit('demo');
eh.emit('demo');
eh.emit('demo');
eh.emit('demo');