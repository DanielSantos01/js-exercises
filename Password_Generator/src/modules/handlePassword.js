import { letters, numbers, spectial_caracters } from './data/fields.json';

const MAX_LETTERS = letters.length;
const MAX_NUMBERS = numbers.length;
const MAX_SPECIAL_CARACTERS = spectial_caracters.length;

const getRandomField = (min = 1, max = 3, fields = []) => {
  const randomIndex = Math.floor(Math.random() * (max - min) + min);
  return fields[randomIndex];
}

const getLetter = (isUppercase = false) => {
  const randomIndex = Math.floor(Math.random() * (MAX_LETTERS));
  const randomLetter = letters[randomIndex];
  return isUppercase ? randomLetter.toUpperCase() : randomLetter;
};

const getNumer = () => {
  const randomIndex = Math.floor(Math.random() * (MAX_NUMBERS));
  const randomNumber = numbers[randomIndex];
  return randomNumber;
};

const getSpecialCaracter = () => {
  const randomIndex = Math.floor(Math.random() * (MAX_SPECIAL_CARACTERS));
  const randomCaracter = spectial_caracters[randomIndex];
  return randomCaracter;
};

export const createPassword = (creationObject) => {
  let newPassword = '';
  const selectedFields = Object.keys(creationObject);

  while (newPassword.length < creationObject.length) {
    const randomField = getRandomField(1, selectedFields.length, selectedFields);
    switch (randomField) {
      case 'numbers':
        newPassword += getNumer();
        break;
      case 'uppercase':
        newPassword += getLetter(true);
        break;
      case 'lowercase':
        newPassword += getLetter();
        break;
      case 'special_caracters':
        newPassword += getSpecialCaracter();
        break;
      default:
        break;
    }
  }
  return newPassword;
};
