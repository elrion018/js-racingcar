import { Car } from './';

const game = {
  cars: [],

  updateCars: (namesText) => {
    const splitedNameText = namesText.split(',');
  },

  setCars: (names) => {
    game.cars = names.map((name) => new Car(name));
  },
};
