import { createInterface } from './modules/createInterface.js';
import { validateForm } from './modules/formularyValidator.js';
import { fields } from './data/index.js';

(function main() {
  createInterface(fields, validateForm);
})();