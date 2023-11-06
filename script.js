////calcPart//////

const keys = document.querySelectorAll(".key");

const display_input = document.querySelector(".calc-input .input");
const display_output = document.querySelector(".calc-input .output");

let input = "";

for (let key of keys) {
  const value = key.dataset.key;

  key.addEventListener("click", () => {
    if (value == "clear") {
      input = "";
      display_input.innerHTML = "";
      display_output.innerHTML = "";
    } else if (value == "backspace") {
      input = input.slice(0, -1);
      display_input.innerHTML = cleanInput(input);
    } else if (value == "=") {
      let result = eval(input);

      display_output.innerHTML = "=" + result;
    } else {
      if (validateInput(value)) {
        input += value;
        display_input.innerHTML = cleanInput(input);
      }
    }
  });
}

function cleanInput(input) {
  let input_array = input.split("");
  let input_array_length = input_array.length;

  for (let i = 0; i < input_array_length; i++) {
    if (input_array[i] == "*") {
      input_array[i] = `<span class="operator ">×</span>`;
    } else if (input_array[i] == "/") {
      input_array[i] = `<span class="operator">÷</span>`;
    } else if (input_array[i] == "+") {
      input_array[i] = `<span class="operator">+</span>`;
    } else if (input_array[i] == "-") {
      input_array[i] = `<span class="operator">-</span>`;
    }
  }
  return input_array.join("");
}

function validateInput(value) {
  let last_input = input.slice(-1);
  let operators = ["+", "-", "*", "/"];
  if (value == "." && last_input == ".") {
    return false;
  }
  if (operators.includes(value)) {
    if (operators.includes(last_input)) {
      return false;
    } else {
      return true;
    }
  }
  return true;
}

////dayNightPart/////

let nowTime = new Date();
let minut = nowTime.getMinutes();
let hour = nowTime.getHours();
let sekund = nowTime.getSeconds();
let time = hour + ":" + minut + ":" + sekund;
console.log(time);



let day = document.querySelector(".sun");
let night = document.querySelector(".moon");

let CalcApp = document.querySelector(".CalcApp");
  
night.addEventListener("click", () => {
  day.style.display = "block";
  night.style.display = "none";
  CalcApp.classList.toggle("lightPart");
});
day.addEventListener("click", () => {
  day.style.display = "none";
  night.style.display = "block";
  CalcApp.classList.toggle("lightPart");
});
