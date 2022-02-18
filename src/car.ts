export class Car {
  constructor(private _distance: number) {}

  public get distance(): number {
    return this._distance;
  }

  public set distance(distance: number) {
    this._distance = distance;
  }
}
