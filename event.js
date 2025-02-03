const heading=document.querySelector('h1')
const body = document.querySelector("body");
// heading.addEventListener('keypress',(e)=>{
//     console.log(e.key);
    
// })

let count=1
// heading.addEventListener("touchstart", () => {
//   const newElem = document.createElement("p");
//   newElem.innerText = `clicked time ${count++}`;
//   body.append(newElem);
// });

// heading.addEventListener("mousemove", () => {
//   const newElem = document.createElement("p");
//   newElem.innerText = `clicked time ${count++}`;
//   body.append(newElem);
// });

heading.addEventListener("pointermove", () => {
  const newElem = document.createElement("p");
  newElem.innerText = `clicked time ${count++}`;
  body.append(newElem);
});