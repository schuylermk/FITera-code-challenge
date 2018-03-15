function changeBackgroundColor () {
  var main = document.querySelector('main');
  var rgb = [];
  for (var i = 0; i < 3; i++) {
    rgb.push(Math.floor(Math.random() * 255));
    main.style.backgroundColor = 'rgb(' + rgb.join(',') + ')'; 
  }
  console.log(`Main's background color is rgb(${rgb})`);
}
function removeBgColor() {
  var main = document.querySelector('main');
  main.style.backgroundColor = '';
}


let textToggle = document.getElementById('changeTextSize');
let theText = document.querySelectorAll('.card-text');

textToggle.onclick = () => {
  for (let x of theText) {
    x.classList.toggle('toggled');
  }
}

function doMath() {
  var num1 = parseInt(document.getElementById('firstNumber').value),
      num2 = parseInt(document.getElementById('secondNumber').value),
    choice = document.getElementById('math').value,
    result = document.getElementById('result')

  if (choice === 'add') {
    result.value = ` = ${num1 + num2}`;
  } 
  if (choice === 'subtract') {
    result.value = ` = ${num1 - num2}`;
  } 
  if (choice === 'multiply') {
    result.value = ` = ${num1 * num2}`;
  } 
  if (choice === 'divide') {
    result.value = ` = ${num1 / num2}`;
  }
}