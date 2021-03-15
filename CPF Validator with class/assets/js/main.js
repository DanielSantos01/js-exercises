class CPFValidator {
  constructor(cpf) {
    Object.defineProperties(this, {
      onlyCPFNumbers: {
        writable: false,
        enumerable: true,
        configurable: false,
        value: cpf.replace(/\D+/g, ''),
      },
      EXPECTED_LENGTH: {
        writable: false,
        enumerable: false,
        configurable: false,
        value: 11,
      },
      INITIAL_POSITION: {
        writable: false,
        enumerable: false,
        configurable: false,
        value: 0,
      }
    });
  }

  validate() {
    const isLengthValid = this.checkLength();
    if (!isLengthValid) return false;
    const isSequency = this.checkSequency();
    if (isSequency) return false;
    const isAValidCPF = this.checkValidate();
    return isAValidCPF;
  }

  checkLength() {
    const cpfLength = this.onlyCPFNumbers.length;
    return  cpfLength === this.EXPECTED_LENGTH;
  };

  checkSequency() {
    const cpfLength = this.onlyCPFNumbers.length;
    const sequency = this.onlyCPFNumbers.charAt(this.INITIAL_POSITION).repeat(cpfLength);
    return sequency === this.onlyCPFNumbers;
  }

  checkValidate() {
    let comparedCPF = this.onlyCPFNumbers.slice(0, 9);
    let initialMultiplier = 10;

    for (let times = 0; times < 2; times++) {
      const splittedCPF = Array.from(comparedCPF);
      const calculatedNumber = this.calculateNumber(splittedCPF, initialMultiplier++);
      comparedCPF = `${comparedCPF}${calculatedNumber}`;
    }

    const isCompatible = comparedCPF === this.onlyCPFNumbers;
    return isCompatible;
  };

  calculateNumber = (cpfAsArray = [], initialMultiplier = 0) => {
    let multiplier = initialMultiplier;

    const reducedValue = cpfAsArray.reduce((acc, curr) => {
      const currentValue = acc + (Number(curr) * multiplier);
      multiplier--;
      return currentValue;
    }, 0);
    
    const calculatedNumber = 11 - (reducedValue % 11);
    return calculatedNumber < 9 ? calculatedNumber : 0;
  };
}


(function main() {
  const createInput = (type = 'text') => {
    const input = document.createElement('input');
    input.type = type;
    input.classList.add('input');
    return input;
  };

  const createText = (desc = 'Generic Text', classType = '') => {
    const text = document.createElement('p');
    if (classType) text.classList.add(classType);
    text.classList.add('highlightText')
    text.innerText = desc;
    return text;
  };

  const replaceLastChild = (newChild) => {
    const container = document.querySelector('.container');
    const oldChild = container.lastChild;
    container.replaceChild(newChild, oldChild);
  };

  const addChilds = (childs = []) => {
    const container = document.querySelector('.container');
    childs.forEach((child) => {
      container.appendChild(child);
    });
  };

  const handleMessage = (isCompatible = false) => {
    const classType = isCompatible ? 'success' : 'failed';
    const messageContent = isCompatible ? 'Entered CPF is valid' : 'Entered CPF is invalid';
    const statusMessage = createText(messageContent, classType);
    replaceLastChild(statusMessage);
  };

  const handleCPF = (cpf = '') => {
    const CPF = new CPFValidator(cpf);
    const isAValidCPF = CPF.validate();
    handleMessage(isAValidCPF);
  };

  const description = createText('Enter your CPF');
  const statusMessage = createText('CPF not rated yet');
  const input = createInput();
  addChilds([description, input, statusMessage]);

  document.addEventListener('keydown', (event) => {
    const isEnterPressed = event.keyCode === 13;
    if (!isEnterPressed) return;
    const cpf = input.value;
    handleCPF(cpf);
  });
})();