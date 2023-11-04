// setTimeout((val)=>{
//     console.log(val)
// }, 0, "cou cou")

// console.log("..............")

// const mess = new Promise((resolve, reject) => {
//   resolve("Good");
// });

// const x = mess
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((err) => {
//     console.log(err, "xxxx");
//   });


const mes1 = Promise.resolve("mess1 resolut");
const mes2 = Promise.reject("mess2 resolut"); 

const mes = Promise.all([mes1, mes2]) // tout tenu
// const mes = Promise.any(mes1, mes2) // au moin une tenu
// const mes = Promise.race(mes1, mes2); // au moins une tenu ou rejeté

console.log(mes.then(console.log))