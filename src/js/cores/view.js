import { SELECTORS } from '../constants/index.js';

export const view = {
  targetElement: document.querySelector(SELECTORS.APP_SELECTOR),

  attachListeners: () => {
    view.targetElement.addEventListener('submit', view.inputNamesText);
  },

  inputNamesText: (event) => {
    event.preventDefault();

    console.log('call');
  },
};
