const button = document.querySelectorAll('button');
const value = document.querySelector('.value');

console.log(button);
button[0].onclick = function () {
  let num = Number(value.innerText);
  value.innerText = ++num;
}

button[1].onclick = function () {
  let num = Number(value.innerText);
  value.innerText = --num;
}
