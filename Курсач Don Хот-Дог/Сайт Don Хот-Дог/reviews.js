let tryba = document.getElementById('tryba')
tryba.addEventListener('click', () => {
  alert('Контактный номер: +7 (911) 629-47-40 ')
})

let tryba_2 = document.getElementById('tryba_2')
tryba_2.addEventListener('click', () => {
  alert('Контактный номер: +7 (911) 629-47-40 ')
})


let range = document.getElementById("range");
let inputValue = document.getElementById("value");

range.addEventListener("input", showSliderValue, false);

function showSliderValue() {
  inputValue.innerHTML = range.value;
  let bulletPosition = (range.value / range.max);
  inputValue.style.left = (bulletPosition * 480) + "px";
}

let range_2 = document.getElementById("range_2");
let inputValue_2 = document.getElementById("value_2");

range_2.addEventListener("input", showSliderValue_2, false);

function showSliderValue_2() {
  inputValue_2.innerHTML = range_2.value;
  let bulletPosition_2 = (range_2.value / range_2.max);
  inputValue_2.style.left = (bulletPosition_2 * 480) + "px";
}

let range_3 = document.getElementById("range_3");
let inputValue_3 = document.getElementById("value_3");

range_3.addEventListener("input", showSliderValue_3, false);

function showSliderValue_3() {
  inputValue_3.innerHTML = range_3.value;
  let bulletPosition_3 = (range_3.value / range_3.max);
  inputValue_3.style.left = (bulletPosition_3 * 480) + "px";
}

let range_4 = document.getElementById("range_4");
let inputValue_4 = document.getElementById("value_4");

range_4.addEventListener("input", showSliderValue_4, false);

function showSliderValue_4() {
  inputValue_4.innerHTML = range_4.value;
  let bulletPosition_4 = (range_4.value / range_4.max);
  inputValue_4.style.left = (bulletPosition_4 * 480) + "px";
}