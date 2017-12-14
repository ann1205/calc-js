const display = document.getElementById('display');

document.querySelectorAll('.digit').forEach(el => {
  el.addEventListener('click', numClicked);
});

function numClicked(ev) {
  const digit = ev.target.innerHTML;
  display.value += digit;
}

const clear = document.getElementById('clear');
clear.addEventListener('click', el => display.value = "");

const solve = document.getElementById('equals');
solve.addEventListener('click', el => {
    el = display.value;
    el = eval(el);
    display.value = el;
});
