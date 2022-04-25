import { validator } from './validator.js';
import { ALERT_TEXTS } from '../constants/index.js';

export const viewModel = {
  inputNamesText: (namesText) => {
    if (!namesText) return;

    const splitedNames = namesText.split(',');

    if (!validator.allNamesLengthIsProper(splitedNames)) {
      alert(ALERT_TEXTS.INCORRECT_NAME_LENGTH);

      return;
    }
  },
};
