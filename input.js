const username = document.getElementById("username");
const body = document.querySelector("body");
const heading = document.querySelector("h1");
let count = 1;
// username.addEventListener("click", () => {
//   const newElem = document.createElement("p");
//   newElem.innerText = `clicked time ${count++}`;
//   body.append(newElem);
// });

// username.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   heading.innerText=e.target.value
//   console.log('input fired');
// });

username.addEventListener("change", (e) => {
  console.log(e.target.value);
  heading.innerText=e.target.value
  console.log('input fired');
  
});
