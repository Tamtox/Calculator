const calculation = document.querySelector('#calculations');
//Other inputs
const clear = document.querySelector('#clear')
clear.addEventListener('click',()=>{calculation.innerHTML=""})
const del = document.querySelector('#del')
del.addEventListener('click',()=>{calculation.innerHTML=calculation.innerHTML.slice(0,-1)})
//Numbers
const arrNums = 'one two three four five six seven eight nine decimal zero percent'.split(" ")
const nums = {
}
const numsEvents = [];
for(let i=0;i<arrNums.length;i++) {
    nums[arrNums[i]]=document.querySelector(`#${arrNums[i]}`)
}
for(let i in nums) {
    numsEvents.push(nums[i].addEventListener('click',()=>{console.log(nums[i].innerHTML)}))
}
//Operators