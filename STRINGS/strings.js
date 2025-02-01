// const letters='   hello there    ohoo'
// const ltr=letters.toLocaleLowerCase().trim()
// const name=`my name is ${letters}`

const heading=document.querySelectorAll('h1')

// heading[0].style.color='teal'
// heading[1].style.backgroundColor='teal'

for(let i=0;i<heading.length;i++){
    heading[i].style.color='red'
}