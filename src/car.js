export default class Car {
  constructor(name) {
    this.name = name;
    this.moveState = 'stop';
    this.position = 0;
  }

  decideGoOrStop() {
    const randomNum = MissionUtils.Random.pickNumberInRange(0, 9);

    return randomNum >= 4 ? 'go' : 'stop';
  }

  setmoveState() {
    this.moveState = this.decideGoOrStop();
  }

  move() {
    console.log(this.name);
    this.setmoveState();
    if (this.moveState === 'go') return this.go();
  }

  go() {
    this.position += 1;
  }
}
