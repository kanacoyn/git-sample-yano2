export class Car {
  //////////中西の変更///////////
  constructor(private _name: number, private _distance: number) {}

  public get name(): number {
    return this._name;
  }

  public set name(name: number) {
    this._name = name;
  }
  //お譲りします.

  public get distance(): number {
    return this._distance;
  }

  public set distance(distance: number) {
    this._distance = distance;
  }
}
