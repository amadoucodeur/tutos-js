const set = new Set([1, 1, 2, 3]);

// for(el of set){
//     console.log(el)
// }

// console.log(set.size) // 3
// console.log(set.size) // 3
// set.add(7)
// set.delete(7) // true
// set.clear()
// console.log(set)
// console.log(set.has(2)); //true

// const i = set.values()
// console.log(i.next().value)
// console.log(i.next().value);
// console.log(i.next().value);
// console.log(i.next().value);

class MySet {
  constructor(props) {
    this.props = this.controller(props);
    this.cusor = 0
  }

  controller(val) {
    const out = [];
    for (let el of val) {
      !out.includes(el) && out.push(el);
    }
    return out;
  }

  size() {
    return this.props.length;
  }

  add(val) {
    this.props = this.controller(this.props.concat(val));
  }

  delete(val) {
    val = Array.of(val);
    const _new = [];
    for (let i of this.props) {
      !val.includes(i) && _new.push(i);
    }
    this.props = _new;
  }

  clear() {
    this.props = [];
  }

  has(val) {
    return this.props.includes(val);
  }

  next(){
    return this.props.at(this.cusor) 
  }
}

const myset = new MySet([1, 2, 3, 2, 3, 3, 3]);
// myset.clear();
console.log(myset.has([1]));
