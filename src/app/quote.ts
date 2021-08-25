export class Quote {

  public showDescription?: boolean;
  constructor(
    public name: string,
    public saying: string,
    public author: string,
    public description: number[]
  ) {
    this.showDescription = false;
  }
}
