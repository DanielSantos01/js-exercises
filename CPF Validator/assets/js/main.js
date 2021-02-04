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

  const calculateNumber = (cfpAsArray = [], initialMultiplier = 0) => {
    let multiplier = initialMultiplier;

    const reducedValue = cfpAsArray.reduce((acc, curr) => {
      const currentValue = acc + (Number(curr) * multiplier);
      multiplier--;
      return currentValue;
    }, 0);
    
    const calculatedNumber = 11 - (reducedValue % 11);
    return calculatedNumber < 9 ? calculatedNumber : 0;
  };

  const handleCPF = (cpf = '') => {
    const parsedCPF = cpf.replace(/\D+/g, '');
    let comparedCPF = parsedCPF.slice(0, 9);
    let initialMultiplier = 10;

    for (let times = 0; times < 2; times++) {
      const splittedCPF = Array.from(comparedCPF);
      const calculatedNumber = calculateNumber(splittedCPF, initialMultiplier++);
      comparedCPF = `${comparedCPF}${calculatedNumber}`;
    }

    const isCompatible = comparedCPF === parsedCPF;
    handleMessage(isCompatible);
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