// //console.log('welcome avi');
// function calcRet(retAge){
//     return function(dob) {
//         var age = new Date().getFullYear() - dob;
//         console.log(`${retAge - age} years left until retirement.`);
//     }
// }
// var cage = calcRet(60); cage(1992);
// calcRet(65)(1992);

// var test = (function(){
//     var num1 = 23;
//     var add = function(num){
//         return num + num1;
//     };
//     return {
//         res : function(num2){
//             console.log(add(num2));
//         }
//     }
// })();

// test.res(5);

var x = {
    name: 'avi',
    click: function(){
            document.getElementById('avi').addEventListener('click',() => alert(this.name)
        );
    }
};
x.click();

// //arrays
// var box5 = document.querySelectorAll('.box');
// // console.log(Array.prototype.slice.call(box5));
// var boxarray = Array.from(box5);
// box5.forEach(cur => cur.style.backgroundColor = '#6739b7');

function Stopwatch(){
    let startTime, stopTime, running, duration = 0;
    this.start = () => {
        if(running)
            throw new Error('already running');
        console.log('started');
        running = true;
        startTime = new Date();
    }
    this.stop = () => {
        if(!running)
            throw new Error('not started yet!');
            console.log('stopped');
        running = false;
        stopTime = new Date();
        duration += (stopTime.getTime() - startTime.getTime())/1000;
    }
    this.reset = () => {
        startTime = null;
        stopTime = null;
        running = false;
        duration = 0;
        console.log('reset successful');
    }
    Object.defineProperty(this,'duration',{
        get: () => duration
    })
}
let sw = new Stopwatch();


let add = (x1) => (x2) => (x3) => x1+x2+x3

console.log('result is '+ add(10)(20)(30));





















