export class Car {
  //////////中西の変更///////////
  constructor(private _name: number) {}

  public get name(): number {
    return this._name;
  }

  public set name(name: number) {
    this._name = name;
  }
}
