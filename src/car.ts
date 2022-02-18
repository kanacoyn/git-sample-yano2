export class Car {
  constructor(private _speed: number) {}

  public get speed(): number {
    return this._speed;
  }

  public set speed(speed: number) {
    this._speed = speed;
  }
}
