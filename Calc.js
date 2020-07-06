const calculation = document.querySelector('#calculations');
//Numbers
const arrNums = 'one two three four five six seven eight nine decimal zero percent'.split(" ")
const nums = {
}
const numsEvents = [];
for(let i=0;i<arrNums.length;i++) {
    nums[arrNums[i]]=document.querySelector(`#${arrNums[i]}`)
}
for(let i in nums) {
    numsEvents.push(nums[i].addEventListener('click',()=>{calculation.innerHTML+=nums[i].innerHTML}))
}
//Operators
const clear = document.querySelector('#clear')
clear.addEventListener('click',()=>{calculation.innerHTML=""})
const del = document.querySelector('#del')
del.addEventListener('click',()=>{calculation.innerHTML=calculation.innerHTML.slice(0,-1)})
const plus = document.querySelector('#plus')
plus.addEventListener('click',()=>{calculation.innerHTML+="+"})
const minus = document.querySelector('#minus')
minus.addEventListener('click',()=>{calculation.innerHTML+="-"})
const multiply = document.querySelector('#multiply')
multiply.addEventListener('click',()=>{calculation.innerHTML+="*"})
const divide = document.querySelector('#divide')
divide.addEventListener('click',()=>{calculation.innerHTML+="/"})
