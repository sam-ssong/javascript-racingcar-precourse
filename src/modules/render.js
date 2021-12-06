/* eslint-disable class-methods-use-this */
import { $ } from './helpers/utils.js';

export default class Render {
  constructor() {
    this.app = $('#app');
  }

  carPosition(carInstance) {
    const add = `${carInstance.name} : ${carInstance.position}`;
    this.app.append(add);
  }

  result(winners) {
    const result = [...winners].map((winner) => winner.name);
    const newSpan = `<span id="racing-winners">winners: ${result.join(
      ','
    )}</span>`;

    this.app.innerHTML += newSpan;
    console.log(winners);
  }
}
