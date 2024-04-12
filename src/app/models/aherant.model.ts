export class AherantModel{
  constructor(
  public firstName: string,
  public lastName: string,
  public phone: number,
  public domicile: string,
  public amountMembership: number,
  public membership: membership[]
  ) {
  }
}

export class membership{
  constructor(public year:string, public amount:string) {
  }
}
