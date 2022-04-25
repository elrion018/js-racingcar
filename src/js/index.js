import { view, viewModel } from './cores/index.js';
import { SELECTORS } from './constants/index.js';

view.init({ targetSelector: SELECTORS.APP_SELECTOR, viewModel });
