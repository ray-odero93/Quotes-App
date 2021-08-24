export class Quote {
  public upvotes!: number
  public downvotes!: number
  public datePosted!: Date

  constructor(
    public name: string,
    public author: string,
    public words:string
  ) {
    this.upvotes = 0;
    this.downvotes = 0;
    this.datePosted = new Date;
  }
}
