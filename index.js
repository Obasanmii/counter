
/* let count = 0

console.log(count)

let myAge=23

console.log(myAge) 

let myAge=23
let humanDogRatio = 7
let myDogAge=myAge * humanDogRatio

myDogAge= myDogAge+10
console.log(myDogAge)

// document.getElementById("count-el").innerText=4

function increment(){
    console.log("The button was clicked")
}
let lap1 = 34
let lap2 = 33
let lap3 = 36

function tLaps(){
    console.log(totalLaps=lap1+lap2+lap3)
}
tLaps()

let countEl=document.getElementById("count-el")
let count = 0

function increment(){
    console.log(count = count + 1)
    countEl.innerText=count
}
increment()

function save(){
    console.log(count)
}
*/
let countEl = document.getElementById("count-el")
let count = 0

let saveEl=document.getElementById("save-el")

let reset=0


function increment() {
    count += 1
    countEl.innerText = count
}
function save() {
    let result = count + "-"
    saveEl.textContent += result
    countEl.textContent=reset
    count=0
}