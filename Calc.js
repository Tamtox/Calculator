const calculation = document.querySelector('#calculations');
//Check for repeating operators
function check() {
    let operators = "+-*/.".split("");
    for(let i of operators) {
        if(operators.includes(calculation.innerHTML[calculation.innerHTML.length-1]) && operators.includes(calculation.innerHTML[calculation.innerHTML.length-2])) {
            calculation.innerHTML=calculation.innerHTML.slice(0,-1)
        }
    }
}
//Numbers
const arrNums = 'one two three four five six seven eight nine zero'.split(" ")
const nums = {
}
const numsEvents = [];
for(let i=0;i<arrNums.length;i++) {
    nums[arrNums[i]]=document.querySelector(`#${arrNums[i]}`)
}
for(let i in nums) {
    numsEvents.push(nums[i].addEventListener('click',()=>{
        calculation.innerHTML+=nums[i].innerHTML}))
}
//Operators
const clear = document.querySelector('#clear')
clear.addEventListener('click',()=>{calculation.innerHTML=""})
const del = document.querySelector('#del')
del.addEventListener('click',()=>{calculation.innerHTML=calculation.innerHTML.slice(0,-1)})
const plus = document.querySelector('#plus')
plus.addEventListener('click',()=>{
    if(calculation.innerHTML.length>0) {
        calculation.innerHTML+="+"
    }
    check()
})
const minus = document.querySelector('#minus');
minus.addEventListener('click',()=>{
        calculation.innerHTML+="-"
        let operators = "+-*/.".split("");
        for(let i of operators) {
            if(calculation.innerHTML[calculation.innerHTML.length-1] !=="-" && operators.includes(calculation.innerHTML[calculation.innerHTML.length-2])) {
                calculation.innerHTML=calculation.innerHTML.slice(0,-1)
            }
        }
        if(calculation.innerHTML[calculation.innerHTML.length-1] ==="-" && operators.includes(calculation.innerHTML[calculation.innerHTML.length-2])&& operators.includes(calculation.innerHTML[calculation.innerHTML.length-3])) {
            calculation.innerHTML=calculation.innerHTML.slice(0,-1)
        }
        else if((calculation.innerHTML[0]==='-' && calculation.innerHTML[1] === '-')||(calculation.innerHTML[calculation.innerHTML.length-1]==='-' && calculation.innerHTML[calculation.innerHTML.length-2]==='.')) {
            calculation.innerHTML=calculation.innerHTML.slice(0,-1)
        }
})
const multiply = document.querySelector('#multiply')
multiply.addEventListener('click',()=>{
    if(calculation.innerHTML.length>0) {
        calculation.innerHTML+="*"
    }
    check()
})
const divide = document.querySelector('#divide')
divide.addEventListener('click',()=>{
    if(calculation.innerHTML.length>0) {
        calculation.innerHTML+="/"
    }
    check()
})
const decimal = document.querySelector('#decimal');
decimal.addEventListener('click',()=>{
    if(calculation.innerHTML.length>0) {
        calculation.innerHTML+="."
    }
    check()
})
const percent = document.querySelector('#percent');
percent.addEventListener('click',()=>{
    const digits = '1234567890';
    if(digits.includes(calculation.innerHTML[calculation.innerHTML.length-1]) && calculation.innerHTML.length>0) {
        calculation.innerHTML+="%"
    }
    check()
})
//Get rid of trailing operators
function removeTrailingOperators() {
    let operators = "+-*/.";
    if(operators.includes(calculation.innerHTML[calculation.innerHTML.length-1]) && operators.includes(calculation.innerHTML[calculation.innerHTML.length-2])) {
        calculation.innerHTML=calculation.innerHTML.slice(0,-2)
    }
    else if(operators.includes(calculation.innerHTML[calculation.innerHTML.length-1])) {
        calculation.innerHTML=calculation.innerHTML.slice(0,-1)
    }
}
//Calculator function
let equals = document.querySelector('#equals');
equals.addEventListener('click',()=>{
    
})