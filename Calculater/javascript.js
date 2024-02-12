// Todo: Make M+ M- and MC functional
let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})

let string = "";
let buttons = document.querySelectorAll('.button');
const inputField = document.querySelector('input');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', handleClick);
});

function handleClick(e) {
  const inputValue = e.target.innerHTML;

  if (inputValue === '=') {
    string = eval(string);
    inputField.value = string;
  } else if (inputValue === 'C') {
    string = "";
    inputField.value = string;
  } else {
    string = string + inputValue;
    inputField.value = string;
  }
}

// Keyboard support
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  const keyValue = e.key;

  if (!isNaN(keyValue) || ['+', '-', '*', '/', '='].includes(keyValue)) {
    string = string + keyValue;
    inputField.value = string;
  } else if (keyValue === 'Enter') {
    string = eval(string);
    inputField.value = string;
  } else if (keyValue === 'Backspace') {
    string = string.slice(0, -1);
    inputField.value = string;
  }
}