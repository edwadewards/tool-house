// p element selectors for result
const lbsOutput = document.querySelector('.pounds-output');
const gramsOutput = document.querySelector('.grams-output');
const kgOutput = document.querySelector('.kg-output');
const ozOutput = document.querySelector('.oz-output');

// div selectors for each weight type
const lbsDash = document.querySelector('.pounds-dash');
const gramsDash = document.querySelector('.grams-dash');
const kgDash = document.querySelector('.kilograms-dash');
const ozDash = document.querySelector('.ounces-dash');
const weightDash = document.querySelectorAll('[data-dash]');
const dashArr = Array.from(weightDash);

// text input
const numberValue = document.getElementById('number-value');
// dropdown menu
const weightSelect = document.getElementById('weight-selection');


numberValue.addEventListener('input', (e) => {
  if(weightSelect.value == 'pounds') {
    let lbs = e.target.value;
    gramsOutput.innerHTML = lbs/0.00220462;
    kgOutput.innerHTML = lbs/2.2046;
    ozOutput.innerHTML = lbs*16;
  }
  else if(weightSelect.value == 'grams') {
    let grams = e.target.value;
    lbsOutput.innerHTML = grams/454;
    kgOutput.innerHTML = grams/1000;
    ozOutput.innerHTML = grams/28.349523;
  } 
  else if(weightSelect.value == 'kilograms') {
    let kg = e.target.value;
    lbsOutput.innerHTML = kg*2.2;
    gramsOutput.innerHTML = kg*1000;
    ozOutput.innerHTML = kg*35.274;
  }
  else if(weightSelect.value == 'ounces') {
    let oz = e.target.value;
    lbsOutput.innerHTML = oz/16;
    gramsOutput.innerHTML = oz*28.349523;
    kgOutput.innerHTML = oz/35.274;
  }
});

weightSelect.addEventListener('change', (e) => {
  let active = e.target.value;
  lbsOutput.innerHTML = '';
  gramsOutput.innerHTML = '';
  kgOutput.innerHTML = '';
  ozOutput.innerHTML = '';
  dashArr.forEach(weight => {
    if(weight === active) {
      weight.style.display = 'none';
    } else {
      weight.style.display = 'flex';
    }
  });
});

numberValue.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});