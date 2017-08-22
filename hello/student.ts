export class Student {
    constructor(private name: string, private num: number) {}

    getLabel(): string {
        return `Student ${this.name} mit Matrikelnummer: ${this.num}`;
    }
}