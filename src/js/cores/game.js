import { Car } from './';

const game = {
  cars: [],

  setCars: (names) => {
    game.cars = names.map((name) => new Car(name));
  },
};
