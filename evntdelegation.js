const heading=document.querySelector('h1')
const container=document.querySelector('.container')
const newCard=document.querySelectorAll('.card')

let count=1
heading.addEventListener('click',()=>{
    const newElem=document.createElement('p')
    newElem.innerText=count++
    newElem.classList.add('card')
    container.append(newElem)
    // newElem.addEventListener('click',()=>{
    //     newElem.remove()
    // })
})
container.addEventListener('click',(event)=>{
    console.log(event.target);
    event.target.remove()
})

