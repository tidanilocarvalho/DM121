var value = "test";
var n = 80
var flag = true;

console.log(value)
console.log(n)
console.log(flag)

var name = 'DM121';
console.log(name)

console.log(name.length)
console.log(name.toLowerCase())

console.log(!0)
console.log(!null)
console.log(!undefined)
console.log(!'')

var myArray = [0, 10, 60]
console.log(myArray)

var myArrayObj = new Array(5);
console.log(myArrayObj)

//console.log(i)
const numbers = [0, 1, 2, 3, 4];
for(let i = 0; i < numbers.length; i++) {
    setTimeout(() => {
       console.log(i, numbers[i]) 
    }, 1000);
}

//console.log('value of i', i)

//ES6
let myVar = "value";
const myConst = "value";

console.log(myVar)
console.log(myConst);

//myConst = "new value";

const printMessage = (message) => console.log(message);

printMessage('DM121')

/*
window.name = 'DM121'
function Discipline(){
    this.name = 'DM121 2';
    setTimeout(new function() {
        console.log('Name', this.name)
    }, 300);
}
new Discipline();
*/


window.name = 'DM121'
function DisciplineArrrow(){
    this.name = 'DM121 2';
    setTimeout(() => {
        console.log('Name', this.name)
    }, 300);
}

new DisciplineArrrow();

var sectionSports = document.getElementById('sports');

console.log(sectionSports)

var newElement = document.createElement("h3");
var text = document.createTextNode("My h3");
newElement.setAttribute("id", "t3");
newElement.appendChild(text);
sectionSports.appendChild(newElement);