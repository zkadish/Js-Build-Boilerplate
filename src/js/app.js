const button = document.querySelectorAll('button');
const value = document.querySelector('.value');
var num = Number(value.innerHTML);

function increment () {
  value.innerHTML = ++num;
}

function decrement () {
  value.innerHTML = --num;
}

button[0].onclick = increment;

button[1].onclick = decrement;

// for testing only
module.exports = {
  increment,
  decrement
}