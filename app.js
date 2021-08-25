function person(firstName='Itamar',lastName='Mizrahi'){
    this.firstName=firstName;
    this.lastName=lastName;
}

let itamar=  new person();
console.log(itamar.firstName);



/*let fs = require('fs');

let readMe=fs.readFileSync('lang.txt','base64');

console.log(readMe);

function greet(){
    console.log('hi');

}
greet();

function logGreet(greetCall){
    greetCall();
}

logGreet(greet);


let greetMe=function(){
    console.log('hola');
}
greetMe();

logGreet(greetMe);

logGreet(function(){
    console.log(`omg`);
    
}) 


let greet=require('./greet');
greet();

*/




































/*
let events =require('events');

let myEmitter= new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log((msg));
});


myEmitter.emit('someEvent',' emmited')

let stuff = require('./stuff');


console.log(stuff.counter(['itamar']));
console.log(stuff.add());
console.log(stuff.add(stuff.pi,0));

function clearAndHi(messege='hi'){
    console.log('test');

    let time=0;
    let stopID=setInterval(function(){
        time+=1;
        console.log(time);
        if(time==3){
            clearInterval(stopID)
            console.clear();
            console.log(messege);
        }
    },1000);
}

let sayBye= function(){
    console.log("bye");


}

sayBye();


function callFunc(func){
    func();
}

callFunc(sayBye);
clearAndHi();

*/
