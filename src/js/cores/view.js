import { SELECTORS, SECOND_INDEX } from '../constants/index.js';

export const view = {
  targetElement: null,
  viewModel: null,

  init: ({ targetSelector, viewModel }) => {
    view.targetElement = document.querySelector(targetSelector);
    view.viewModel = viewModel;

    view.attachListeners();
  },

  attachListeners: () => {
    view.targetElement.addEventListener('submit', view.inputNamesText);
  },

  inputNamesText: (event) => {
    event.preventDefault();

    const { value: namesText } =
      event.target.elements[SELECTORS.NAMES_INPUT_SELECTOR.slice(SECOND_INDEX)];

    view.viewModel.inputNamesText(namesText);
  },
};
