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
    removeTrailingOperators();
    const operators = '+*/';
    let currentNum = "";
    const result = [];
    let split = calculation.innerHTML.split("");
    for(let i=0;i<split.length;i++) {
        if((split[0]==="-" && i === 0 )|| (split[i])==='-' && operators.includes(split[i-1])) {
            currentNum+=split[i]
        }
        else if(operators.includes(split[i]) || (split[i] ==="-" && split[i+1] !=="-" && i!==0)) {
            result.push(parseFloat(currentNum))
            result.push(split[i]);
            currentNum=""
        }
        else if(split[i] ==="%") {
            result.push(parseFloat(currentNum)/100)
            currentNum=""
        }
        else if(i===split.length-1) {
            currentNum+=split[i];
            result.push(parseFloat(currentNum))
        }
        else {
            currentNum+=split[i]
        }
    }
    for(let i=0;i<result.length;i++) {
        if(result[i+1]==="*" || result[i+1]==="/") {
            if(result[i+1]==="*") {
                let x = result[i] * result[i+2]
                result.splice(i,3,x)
                i--
            }
            else if(result[i+1]==="/") {
                let x = result[i] / result[i+2]
                result.splice(i,3,x)
                i--
            }
        }
    }
    for(let i=0;i<result.length;i++) {
        if(result[i+1]==="+" || result[i+1]==="-") {
            if(result[i+1]==="+") {
                let x = result[i] + result[i+2]
                result.splice(i,3,x)
                i--
            }
            else if(result[i+1]==="-") {
                let x = result[i] - result[i+2]
                result.splice(i,3,x)
                i--
            }
        }
    }
    calculation.innerHTML=result
})
function a(result) {
    for(let i=0;i<result.length;i++) {
        if(result[i+1]==="*" || result[i+1]==="/") {
            if(result[i+1]==="*") {
                let x = result[i] * result[i+2]
                result.splice(i,3,x)
                i--
            }
            else if(result[i+1]==="/") {
                let x = result[i] / result[i+2]
                result.splice(i,3,x)
                i--
            }
        }
    }
    return result
}