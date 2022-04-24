export class Car {
  name;
  distance;

  constructor(name) {
    this.name = name;
  }

  forward() {
    this.distance += 1;
  }
}
