let counter = 0;
export class Training {
  public id: number;
  constructor (public name: string, public description: string,
               public imageUrl: string, public nextRun: string, public discontinued = false, ) {
    this.id = counter++;
  }
}
