// model
// 차들의 정보와 플레이 횟수에 대한 정보를 가지고 있는다.
// 그리고 controller에 의해 정보들이 수정되고 쓰이게 된다.

export default class Input {
  constructor() {
    this.cars = [];
    this.count = 0;
  }

  // get cars() {
  //   return this.cars;
  // }

  // set cars(cars) {
  //   this.cars = cars;
  // }

  // get count() {
  //   return this.count;
  // }
}

export const isValidatedCarInfo = (value) => {
  console.log(value);
  const values = value.split(',');

  return values.length >= 2;
};

export const a = () => {};
