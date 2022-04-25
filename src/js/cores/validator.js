import { CONDITION_NUMBERS } from '../constants/index.js';

export const validator = {
  allNamesLengthIsProper: (names) =>
    names.every(
      (name) =>
        name.length >= CONDITION_NUMBERS.NAME_MIN_LENGTH &&
        name.length <= CONDITION_NUMBERS.NAME_MAX_LENGTH
    ),
};
