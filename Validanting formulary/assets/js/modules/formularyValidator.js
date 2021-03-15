import { CPFValidator } from './cpfValidator.js';

const handleField = (status, field, message) => {
  const success = !!status;
  const oldClass = success ? 'failed' : 'success';
  const newClass = success ? 'success' : 'failed';
  field.classList.remove(oldClass);
  field.classList.add(newClass);
  field.innerHTML = message;
};

const handleSpecificCase = (fieldName, fieldValue, field) => {
  const fieldLength = fieldValue.length;
  const { minLength, maxLength } = field;
  const lengthInfo = () => {
    return `${fieldName} precisa ter entre ${minLength} e ${maxLength} caracteres.`;
  }

  switch(fieldName) {
    case 'CPF':
      const CPF = new CPFValidator(fieldValue);
      const isValid = CPF.validate();
      if (isValid) return [true, ''];
      return [false, 'CPF inválido'];
    case 'Usuário':
      const isLengthInBounderies = maxLength >=fieldLength && fieldLength >= minLength;
      if (!isLengthInBounderies) {
        return [false, lengthInfo()]
      }
    case 'Senha':
      if (maxLength >= fieldLength && fieldLength >= minLength) return [true, ''];
      return [false, lengthInfo()];
    case 'Repetir_senha':
      const passwordValue = document.querySelector('.Senha').value;
      if (fieldValue !== passwordValue) return [false, 'As senhas não coindidem']
      return handleSpecificCase('Senha', fieldValue, field);
    default:
      return [false, ''];
  }
};

export const validateForm = (fields = []) => {
  fields.forEach((field) => {
    const { fieldName } = field;
    const fieldInput = document.querySelector(`.${fieldName}`);
    const fieldStatus = document.querySelector(`.${fieldName}_status`);
    const fieldValue = fieldInput.value;
    const hasValue = !!fieldValue;
    if (!hasValue) {
      handleField(false, fieldStatus, 'Campo vazio!');
      return;
    }
    const [isValid, message] = handleSpecificCase(fieldName, fieldValue, field);
    handleField(isValid, fieldStatus, message);
  });
};