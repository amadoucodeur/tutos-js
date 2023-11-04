const el = document.querySelector("button")


// el.onclick = (e) => {
//     console.log(e)
// }

// el.onmousemove = (e) => {
//     console.log(e)
// }

// el.addEventListener("mousemove", (e) => {
//   console.log(e);
// });

// window.addEventListener("keydown", (e) => {
//   console.log(e);
// });

// window.addEventListener("keyup", (e) => {
//   console.log(e);
// });

// window.addEventListener("keypress", (e) => {
//   console.log(e);
// });

window.addEventListener("mousemove", (e) => {
  console.log(e);
  e.stopPropagation() // stoper la propagation de l'évènement
  e.preventDefault(); // annuler le rest du" comportement par defaut
});