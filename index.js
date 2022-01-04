let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function increment() {
  count = count + 1;
  countEl.innerText = count;
}
function decrement() {
  count = count - 1;
  countEl.innerText = count;
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  let se = count + "-";
  // 3. Render the variable in the saveEl using innerText
  saveEl.innerText += se;
  countEl.textContent = 0;
  count = 0;
}
