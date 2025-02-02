// const letters='   hello there    ohoo'
// const ltr=letters.toLocaleLowerCase().trim()
// const name=`my name is ${letters}`

// const heading=document.querySelectorAll('h1')
const heads=document.querySelector('.heads')

const para=document.querySelector('.para')
const hea=document.querySelector('h1')

// for(let i=1;i<=100;i++){
//     const newHead=heads.cloneNode()
//     newHead.innerText=i
//     console.log(newHead);
//     para.appendChild(newHead)
// }


const newtext=document.createElement('p')
newtext.innerText='hello shanta miss'
heads.append(newtext)
newtext.classList.add('paragraph')
newtext.id='parg'
console.log(newtext);


for (let i=1;i<=10;i++){
    const image=document.createElement('img')
    image.src=`sprites/pokemon/${i}.png`
    // image.setAttribute('src','index.html')
    image.id='img'
    paragraph1=document.createElement('p')
    paragraph1.innerText='shanta chaudhary'
    console.log(image);
    
    para.append(image,paragraph1)
}




// heading[0].style.color='teal'
// heading[1].style.backgroundColor='teal'

// for(let i=0;i<heading.length;i++){
//     heading[i].style.color='red'
//     heading[i].style.textDecoration='underline'
// }

for(let header of heading){
    // header.style.color='teal'
    // header.style.backgroundColor='pink'

    // header.style.cssText=`
    // font-size:50px;
    // `
    // header.className='link'
    // header.setAttribute('class','headdd')

    // header.classList.add('headdd')
    // header.classList.remove('headdd')
    header.classList.toggle('headdd')
    console.log(header.classList)
}



