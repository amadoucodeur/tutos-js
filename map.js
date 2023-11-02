const map = new Map()
map.set(1,"111")
map.set(2, "111");
map.set(3, "111");
map.set(4, "111");
map.delete(1)
// map.clear() // true
// console.log(map.has(1)) // fasle
// console.log(map.get(2)) // 111

// const k = map.keys()
// const v = map.values()
// console.log(k.next().value," = ",v.next().value)
// const kv = map.entries()
// console.log(kv.next().value) // [v, k]

// map.forEach((v, k)=>{
//     console.log(k," : ",v)
// })