class Calculator {
  constructor(previousOperand_TextElement, currentOperand_TextElement) {
    this.previousOperand_TextElement = previousOperand_TextElement;
    this.currentOperand_TextElement = currentOperand_TextElement;
    this.clear;
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }

  delete() {}

  appendNumber(number) {
    this.currentOperand = number;
  }

  chooseOperation(operation) {}

  computer() {}

  updateDisplay() {
    this.currentOperand_TextElement.innerText = this.currentOperand;
  }
}

const numberButtons = document.querySelectorAll(['data-number']);
const operationsButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperand_TextElement = document.querySelector(
  '[data-previous-operand]'
);
const currentOperand_TextElement = document.querySelector(
  '[data-current-operand]'
);

const calculator = new Calculator(
  previousOperand_TextElement,
  currentOperand_TextElement
);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay;
  });
});
//https://www.youtube.com/watch?v=j59qQ7YWLxw&list=WL&index=3&t=369s
