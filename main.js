class TodoApp {
  constructor() {
    this.tasks = [];
    this.add = document.querySelector("#add");
    this.field = document.querySelector("#field");
    this.container = document.querySelector("#container");
    this.add.addEventListener("click", ()=>{this.addClick()});
    this.clear();
    this.update();
  }

  createTask(text) {
    const div = this.create("div");
    const h4 = this.create("h4", text);
    const btnx = this.create("button", "X");
    const btnmodif = this.create("button", "Modif");

    div.classList.add("grid");
    div.classList.add("taskline");
    btnx.classList.add("secondary");

    div.appendChild(h4);
    div.appendChild(btnmodif);
    div.appendChild(btnx);
    this.container.appendChild(div);
  }

  update() {
    this.clear()
    for (let task of this.tasks) {
      this.createTask(task);
    }
  }

  text = (text) => document.createTextNode(text);
  create = (el, text = null) => {
    return text
      ? (() => {
          const element = document.createElement(el);
          element.appendChild(this.text(text));
          return element;
        })()
      : document.createElement(el);
  };

  clear() {
    this.container.innerHTML = "";
  }

  addTask(text) {
    this.tasks.unshift(text);
    this.update();
  }

  addClick() {
    const text = this.field.value;
    text && this.addTask(text); this.field.value = ""
    
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const App = new TodoApp();
});