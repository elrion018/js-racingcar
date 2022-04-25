import {
  SELECTORS,
  SECOND_INDEX,
  ATTRIBUTES,
  EVENTS,
} from '../constants/index.js';

export const view = {
  targetElement: null,
  viewModel: null,
  renderer: null,

  init: ({ targetSelector, viewModel, renderer }) => {
    view.targetElement = document.querySelector(targetSelector);
    view.viewModel = viewModel;

    renderer.init(view.targetElement);
    view.renderer = renderer;

    view.attachListeners();
  },

  attachListeners: () => {
    view.targetElement.addEventListener(EVENTS.SUBMIT, view.inputNamesText);
  },

  inputNamesText: (event) => {
    event.preventDefault();

    const { targetElement, viewModel } = view;
    const { value: namesText } =
      event.target.elements[SELECTORS.NAMES_INPUT_SELECTOR.slice(SECOND_INDEX)];

    if (viewModel.inputNamesText(namesText)) {
      const namesInput = targetElement.querySelector(
        SELECTORS.NAMES_INPUT_SELECTOR
      );

      namesInput.setAttribute(ATTRIBUTES.DISABLED, '');
    }
  },
};
