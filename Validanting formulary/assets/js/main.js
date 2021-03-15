import { CPFValidator } from './modules/cpfValidator.js';
import { createInterface } from './modules/createInterface.js';
import { validateForm } from './modules/formularyValidator.js';
import { fields } from './data/index.js';

(function main() {
  const validateFormulary = () => validateForm(fields, CPFValidator);
  createInterface(fields, validateFormulary);
})();