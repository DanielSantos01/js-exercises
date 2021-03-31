import CPFValidator from './CPFValidator';

export default class CPFGenerator {
  getRandomInitialDigits(min = 100000000, max = 999999999) {
    const randomDigits = Math.floor(Math.random() * (max - min) + min);
    return String(randomDigits);
  }

  mask(value = '', pattern = '') {
    let index = 0;

    const getMaskChar = () => {
      return value[index++] || '';
    }

    const maskedValue = pattern.replace(/#/g, getMaskChar);
    return maskedValue;
  }

  generateCPF() {
    const randomCpfInitials = this.getRandomInitialDigits();
    const calculatedNumber1 = CPFValidator.calculateNumber(randomCpfInitials);
    const calculatedNumber2 = CPFValidator.calculateNumber(randomCpfInitials + calculatedNumber1);
    const validCpf = randomCpfInitials + calculatedNumber1 + calculatedNumber2;
    const maskedCpf = this.mask(validCpf, '###.###.###-##');
    return maskedCpf;
  }
}
