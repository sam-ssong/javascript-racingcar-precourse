import $ from './utils.js';
import { isValidatedCarInfo } from './input.js';
import Car from './car.js';

export default class Game {
  constructor() {
    this.cars = [];
    this.count = 0;
    this.init();
  }

  init() {
    this.setBinds();
    this.setEvents();
  }

  setBinds() {
    this.carInfoSubmit = this.carInfoSubmit.bind(this);
    this.countInfoSubmit = this.countInfoSubmit.bind(this);
  }

  setEvents() {
    const $carInfoForm = $('#car-info-form');
    const $countInfoForm = $('#count-info-form');

    $carInfoForm.addEventListener('submit', this.carInfoSubmit);
    $countInfoForm.addEventListener('submit', this.countInfoSubmit);
  }

  carInfoSubmit(event) {
    event.preventDefault();

    const { value } = $('#car-names-input');

    if (isValidatedCarInfo(value)) {
      const cars = value.split(',');

      this.cars = [...cars].map((car) => new Car(car));
    }

    if (this.isGameAvailable()) {
      this.play();
    }
  }

  countInfoSubmit(event) {
    event.preventDefault();

    const count = Number($('#racing-count-input').value);

    if (!Number.isNaN(count)) {
      this.count = count;
    }
    if (this.isGameAvailable()) {
      this.play();
    }
  }

  isGameAvailable() {
    return !!this.cars.length && !!this.count;
  }

  play() {
    const $app = $('#app');

    for (let i = 0; i < this.count; i += 1) {
      [...this.cars].forEach((car) => {
        car.move();
        const add = `${car.name} : ${car.position}`;
        $app.append(add);
      });
    }
  }
}
