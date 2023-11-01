class Str {
  BASE_LOWER_CASE = "azertyuiopqsdfghjklmwxcvbn";
  BASE_UPPER_CASE = "AZERTYUIOPQSDFGHJKLMWXCVBN";
  constructor(data) {
    this.data = data;
  }

  //   add(value) {
  //     return value;
  //   }

  valueOf() {
    return this.data;
  }

  concat(value) {
    return this.data + value;
  }

  startsWith(value) {
    if (this.data.length >= value.length) {
      const subchaine = this.data.slice(0, value.length);
      return subchaine === value;
    }
    return false;
  }

  endsWith(value) {
    if (this.data.length >= value.length) {
      const subchaine = this.data.slice(
        this.data.length - value.length,
        this.data.length
      );
      console.log(subchaine);
      return subchaine === value;
    }
    return false;
  }

  padStart(n, value) {
    const chars = this.data.split("");
    for (let i = chars.length; i < n; i++) {
      chars.unshift(value);
    }
    return chars.join("");
  }

  padEnd(n, value) {
    const chars = this.data.split("");
    for (let i = chars.length; i < n; i++) {
      chars.push(value);
    }
    return chars.join("");
  }

  trimStart() {
    const data = this.data.split("");
    for (let i = 0; i <= this.data.length; i++) {
      if (data[i] != " ") {
        break;
      }
      delete data[i];
    }
    return data.join("");
  }

  trimEnd() {
    const data = this.data.split("");
    for (let i = this.data.length - 1; i >= 0; i--) {
      if (data[i] != " ") {
        break;
      }
      delete data[i];
    }
    return data.join("");
  }

  trim() {
    let data = this.trimStart();
    return new Str(data).trimEnd();
  }

  indexOf(value) {
    if (this.data.includes(value)) {
      for (let i = 0; i < this.data.length; i++) {
        if (this.data.slice(i, i + value.length) == value) {
          return i;
        }
      }
    }
    return -1;
  }

  lastIndexOf(value) {
    if (this.data.includes(value)) {
      for (let i = this.data.length; i > 0; i--) {
        console.log(this.data.slice(i - value.length, i));
        if (this.data.slice(i - value.length, i) == value) {
          return i - 1;
        }
      }
    }
    return -1;
  }

  includes(value) {
    if (this.data.length >= value.length) {
      for (let i = 0; i < this.data.length; i++) {
        console.log(this.data.slice(i, i + value.length));
        if (this.data.slice(i, i + value.length) === value) {
          return true;
        }
      }
      return false;
    }
    return false;
  }

  length() {
    let n;
    for (let i in this.data) {
      n = i;
    }
    return parseInt(n) + 1;
  }

  repeat(n) {
    const data = [];
    for (let i = 0; i <= n; i++) {
      data.push(this.data);
    }
    return data.join("");
  }

  replaceAll(old, new_) {
    const data = this.data.split(old);
    return data.join(new_);
  }

  toUpperCase() {
    const out = [];
    for (let i of this.data) {
      if (this.BASE_LOWER_CASE.includes(i)) {
        i = this.BASE_UPPER_CASE[this.BASE_LOWER_CASE.indexOf(i)];
      }
      out.push(i);
    }
    return out.join("");
  }

  toLowerCase() {
    const out = [];
    for (let i of this.data) {
      if (this.BASE_UPPER_CASE.includes(i)) {
        i = this.BASE_LOWER_CASE[this.BASE_UPPER_CASE.indexOf(i)];
      }
      out.push(i);
    }
    return out.join("");
  }

  slice(x, y) {
    const out = [];
    for (let i in this.data) {
      if (i >= x && i < y) {
        out.push(this.data[i]);
      }
    }
    return out.join("");
  }

  subsrting(x, y) {
    if (x > y) {
      let z = x;
      x = y;
      y = z;
    }
    return this.slice(x, y);
  }
}

const str = new Str("Cool col bien ZZRTYUIFD");
console.log(str.subsrting(10, 2));
// console.log(Str.BASE_LOWER_CASE)
