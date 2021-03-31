const inputs = document.querySelectorAll('.input');

export const handleInputs = () => {
  const result = {};

  for (let current = 0; current < inputs.length; current++) {
    const currentInput = inputs[current];
    const lastIndex = currentInput.classList.length - 1;

    switch (currentInput.classList[lastIndex]) {
      case 'length':
        result['length'] = Number(currentInput.value);
        break;
      case 'numbers':
        if (currentInput.checked) result['numbers'] = true;
        break;
      case 'uppercase':
        if (currentInput.checked) result['uppercase'] = true;
        break;
      case 'lowercase':
        if (currentInput.checked) result['lowercase'] = true;
        break;
      case 'special-caracters':
        if (currentInput.checked) result['special_caracters'] = true;
        break;
      default:
        break;
    }
  }
  return result;
};
