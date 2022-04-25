/// <reference types="Cypress" />

import {
  SELECTORS,
  ALERT_TEXTS,
  MOCKED,
} from '../../src/js/constants/index.js';

describe('레이싱 카 테스트', () => {
  const checkVisible = (selector) => cy.get(selector).should('be.visible');
  const checkVisibles = (selectors) =>
    selectors.forEach((selector) => checkVisible(selector));
  const checkAlert = (expectedText) =>
    cy.on('window:alert', (text) => expect(text).to.contains(expectedText));

  beforeEach(() => cy.visit('/'));

  context('초기 화면 테스트', () => {
    it('레이싱 카 어플리케이션이 존재해야한다.', () => {
      checkVisible(SELECTORS.APP_SELECTOR);
    });

    it('초기화면은 게임 타이틀, 예시를 포함한 시작 안내문, 자동차 이름들을 입력할 수 있는 입력창과 입력 버튼으로 구성되어있다.', () => {
      checkVisibles([
        SELECTORS.NAMES_INPUT_TITLE_SELECTOR,
        SELECTORS.NAMES_INPUT_SELECTOR,
        SELECTORS.NAMES_INPUT_BUTTON_SELECTOR,
      ]);
    });
  });

  context('입력 테스트', () => {
    it('1자 미만이거나 5자 초과의 자동차 이름을 입력하면 경고문을 보여준다.', () => {
      cy.get(SELECTORS.NAMES_INPUT_SELECTOR).type(MOCKED.NAME_UPPER_MAX_LENGTH);
      checkAlert(ALERT_TEXTS.INCORRECT_NAME_LENGTH);
      cy.get(SELECTORS.NAMES_INPUT_BUTTON_SELECTOR).click();
    });

    it('정상적인 자동차 이름이 입력되면 입력 창엔 더이상 다른 이름을 입력할 수 없다.', () => {
      cy.get(SELECTORS.NAMES_INPUT_SELECTOR).type(MOCKED.CORRECT_NAMES);
      cy.get(SELECTORS.NAMES_INPUT_BUTTON_SELECTOR).click();

      cy.get(SELECTORS.NAMES_INPUT_SELECTOR).should('be.disabled');
    });
  });
});
