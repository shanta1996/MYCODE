const h1=document.querySelector('h1')
const para=document.querySelector('.para')
const age=document.querySelector('.age')
const nameInput=document.querySelector('.nameInput')
const ageInput=document.querySelector('.ageInput')
h1.innerText=localStorage.name

nameInput.addEventListener('input',(e)=>{
    // console.log(e.target.value);
    // para.innerText=e.target.value
    // localStorage.name=e.target.value
    // para.innerText=localStorage.name
    // localStorage.setItem('name',e.target.value)
})
// para.innerText=localStorage.getItem('name')

// para.innerText=localStorage.getItem('name')

// ageInput.addEventListener('input',(e)=>{
//     localStorage.setItem('roll',e.target.value)
//     age.innerText=localStorage.roll
// })

const myData=JSON.parse(localStorage.getItem('myData')) ||{}
if(myData.name){

    para.innerText=myData.name
}
if(myData.name){
    age.innerText=myData.age
}

nameInput.addEventListener('input',(e)=>{
    myData.name=e.target.value
    localStorage.setItem('myData',JSON.stringify(myData))
    para.innerText=e.target.value
})

ageInput.addEventListener('input',(e)=>{
    myData.age=e.target.value
    localStorage.setItem('myData',JSON.stringify(myData))
    age.innerText=e.target.value
})


const titleInput=document.querySelector('.titleInput')
const descriptionInput=document.querySelector('.descriptionInput')
const title=document.querySelector('.title')
const description=document.querySelector('.description')

const storyData=JSON.parse(localStorage.getItem('storydata')) ||{}

titleInput.addEventListener('input',(e)=>{
storyData.title=e.target.value
localStorage.setItem('storydata',JSON.stringify(storyData))
    title.innerText=e.target.value
})

descriptionInput.addEventListener('input',(e)=>{
    storyData.description=e.target.value
    localStorage.setItem('storydata',JSON.stringify(storyData))
    description.innerText=e.target.value
})
if(storyData.title){
    title.innerText=storyData.title
}
if(storyData.title){
    description.innerText=storyData.description
}

