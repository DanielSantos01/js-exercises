import { createPassword } from './modules/handlePassword';
import { handleInputs } from './modules/handleInputs';
import './assets/css/styles.css';

(function() {
  const button = document.querySelector('.btn-generate');
  const passwordContent = document.querySelector('.password-content');
  const lengthInput = document.querySelector('.length');

  const checkCreationPossibility = (fieldsObject) => {
    const fieldKeys = Object.keys(fieldsObject);
    if (!fieldsObject.length) {
      passwordContent.innerHTML = 'Impossível criar senhas sem caracteres';
      return false;
    } else if (fieldKeys.length <= 1) {
      passwordContent.innerHTML = 'Nenhum campo selecionado';
      return false;
    }
    return true;
  }

  const handlePasswordCreation = () => {
    const fields = handleInputs();
    const isValid = checkCreationPossibility(fields);
    if (!isValid) return;
    const newPassword = createPassword(fields);
    passwordContent.innerHTML = newPassword;
  };

  const checkLength = () => {
    if (Number(lengthInput.value) < 0) lengthInput.value = '0';
  }

  button.addEventListener('click', handlePasswordCreation);
  lengthInput.addEventListener('input', checkLength);
})()
