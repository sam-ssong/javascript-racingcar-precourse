/* eslint-disable class-methods-use-this */
/* eslint-disable import/extensions */
import { $ } from './helpers/utils.js';
import Car from './car.js';
import Render from './render.js';
import Input, { isValidatedCarInfo } from './input.js';

export default class Game {
  init() {
    this.setBinds();
    this.setEvents();
    this.render = new Render();
    this.input = new Input();
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

      this.input.cars = [...cars].map((car) => new Car(car));
    }

    if (this.isGameAvailable()) {
      this.play();
    }
  }

  countInfoSubmit(event) {
    event.preventDefault();

    const count = Number($('#racing-count-input').value);

    if (!Number.isNaN(count)) {
      this.input.count = count;
    }
    if (this.isGameAvailable()) {
      this.play();
    }
  }

  isGameAvailable() {
    return !!this.input.cars.length && !!this.input.count;
  }

  play() {
    for (let i = 0; i < this.input.count; i += 1) {
      this.takeTurn(this.input.cars);
      this.takeTurn(this.input2.cars);
    }
    const winners = this.getWinners(this.input.cars);
    this.render.result(winners);
  }

  takeTurn(cars) {
    [...cars].forEach((car) => {
      car.move();
      this.render.carPosition(car);
    });
  }

  getWinners(cars) {
    const maxValue = Object.values(cars).reduce((acc, cur) => {
      return acc > cur.position ? acc : cur.position;
    }, 0);
    return [...cars].filter((car) => car.position === maxValue);
  }
}
