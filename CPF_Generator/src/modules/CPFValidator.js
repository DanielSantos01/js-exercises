export default class CPFValidator {
  constructor(cpf) {
    Object.defineProperties(this, {
      CPFWithoutSymbols: {
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
    const cpfLength = this.CPFWithoutSymbols.length;
    return  cpfLength === this.EXPECTED_LENGTH;
  };

  checkSequency() {
    const cpfLength = this.CPFWithoutSymbols.length;
    const sequency = this.CPFWithoutSymbols.charAt(this.INITIAL_POSITION).repeat(cpfLength);
    return sequency === this.CPFWithoutSymbols;
  }

  checkValidate() {
    let comparedCPF = this.CPFWithoutSymbols.slice(0, 9);

    for (let times = 0; times < 2; times++) {
      const calculatedNumber = this.calculateNumber(comparedCPF);
      comparedCPF = `${comparedCPF}${calculatedNumber}`;
    }

    const isCompatible = comparedCPF === this.CPFWithoutSymbols;
    return isCompatible;
  };

  static calculateNumber (cpf = '') {
    let multiplier = cpf.length + 1;

    const reducedValue = Array.from(cpf).reduce((acc, curr) => {
      const currentValue = acc + (Number(curr) * multiplier);
      multiplier--;
      return currentValue;
    }, 0);
    
    const calculatedNumber = 11 - (reducedValue % 11);
    return String(calculatedNumber <= 9 ? calculatedNumber : 0);
  };
}
