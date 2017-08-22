let counter = 0;
export class Training {
  public id: number;
  constructor (public name: string, public description?: string) {
    this.id = counter++;
  }
}
