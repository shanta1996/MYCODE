const green=document.querySelector('.green')
const blue=document.querySelector('.blue')
const red=document.querySelector('.red')
const body=document.querySelector('body')

let count=1
red.addEventListener('click',(e)=>{
    console.log('hello jee');
    e.stopPropagation()
    const newElem=document.createElement('p')
    newElem.innerText=count++
    newElem.classList.add('newDiv')
    body.append(newElem)
})