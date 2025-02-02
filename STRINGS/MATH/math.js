// const obj1={
//     name:'shanta',
//     thar:'chaudhary'
// }
// console.log(obj1.name)

// const obj2={}
// Object.assign(obj2,obj1)
// const obj3={...obj2}


// debugger
// var a='name'
// let b='chaudhary'
// console.log(a,b)

// function abc(){
// console.log('hello')
// }
// const body=document.querySelector('body')


const container=document.querySelector('.container')
let myhtml=``
for (let i=1;i<=10;i++){
    myhtml+=`<div>
    <p>${i}</p>
    </div>`
}
container.innerHTML=myhtml
// container.remove()
// body.append(container)

const body=document.querySelector('body')
const button=document.querySelector('button')
const handleClick=()=>{
body.style.backgroundColor='black'
}


const heading=document.querySelector('h1')
const p=document.querySelector('.p')
let count=1
heading.addEventListener('click',()=>{
    const newElem=document.createElement('h2')
    newElem.classList.add('newlem')
    // newElem.innerText='hello world...'
    newElem.innerText=`${count} hello world${count}`
    count++
    body.append(newElem)
    newElem.style.color='blue'
    // p.innerHTML=`<h1>hello world</h1>`
})