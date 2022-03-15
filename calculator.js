class Calculator {
  constructor(enteredData, currentData) {
    this.enteredData = enteredData;
    this.currentData = currentData;
    this.clear();
  }

  clear() {
    this.liveData = '';
    this.compiledData = '';
    this.operation = undefined;
  }

  appendNumber(number) {
    // allow decimal to only be entered once
    if (number === '.' && this.liveData.includes('.')) return;
    // allow multiple numbers to be submitted into text field
    this.liveData = this.liveData.toString() + number.toString();
  }

  chooseOperation(operation) {
    // operations cannot be executed with empty text field
    if (this.liveData === '') return;
    if (this.compiledData !== '') {
      this.compute();
    }
    this.operation = operation;
    this.compiledData = this.liveData;
    this.liveData = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.compiledData);
    const current = parseFloat(this.liveData);
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case 'x':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return  
    }
    this.liveData = computation;
    this.operation = undefined;
    this.compiledData = '';
  }

  displayNumber(number) {
    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay;
    }
  }

  display() {
    this.currentData.innerText = this.displayNumber(this.liveData);
    if (this.operation != null) {
      this.enteredData.innerText = 
        `${this.compiledData} ${this.operation}`;
    } else {
      this.enteredData.innerText = '';
    }
  }
}

const currentData = document.querySelector('.current-data');
const enteredData = document.querySelector('.entered-data');
const numbers = document.querySelectorAll('.btn-number');
const operators = document.querySelectorAll('.btn-operator');
const equals = document.querySelector('.btn-equals');
const clear = document.querySelector('.btn-clear');

const calculator = new Calculator(enteredData, currentData);

numbers.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.display();
  });
});

operators.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText);
    calculator.display();
  });
});

equals.addEventListener('click', button => {
  calculator.compute();
  calculator.display();
});

clear.addEventListener('click', button => {
  calculator.clear();
  calculator.display();
});


