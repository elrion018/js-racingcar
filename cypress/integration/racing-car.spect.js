/// <reference types="Cypress" />

import { SELECTORS } from '../../src/js/constants/index.js';

describe('레이싱 카 테스트', () => {
  const checkVisible = (selector) => cy.get(selector).should('be.visible');
  const checkVisibles = (selectors) =>
    selectors.forEach((selector) => checkVisible(selector));
  const typing = (selector, text) => cy.get(selector).type(text);
  const checkAlert = (expectedText) =>
    cy.on('window:alert', (text) => expect(text).to.contains(expectedText));

  beforeEach(() => cy.visit('/'));

  context('초기 화면 테스트', () => {
    it('레이싱 카 어플리케이션이 존재해야한다.', () => {
      checkVisible(SELECTORS.APP_SELECTOR);
    });

    it('초기화면은 게임 타이틀, 예시를 포함한 시작 안내문, 자동차 이름들을 입력할 수 있는 입력창과 입력 버튼으로 구성되어있다.', () => {
      checkVisibles([
        SELECTORS.TITLE_SELECTOR,
        SELECTORS.NAMES_INPUT_SELECTOR,
        SELECTORS.NAMES_INPUT_BUTTON_SELECTOR,
      ]);
    });

    it('1자 미만이거나 5자 초과의 자동차 이름을 입력하면 경고문을 보여준다.', () => {
      typing(SELECTORS.NAMES_INPUT_SELECTOR, 'abcdef');
      checkAlert(
        '유효하지 않은 이름 길이입니다. 자동차의 이름은 1자 이상, 5자 이하만 가능합니다.'
      );
    });
  });
});
