export class Movie {
  // Optioneel description attribuut
  description = '-'

  constructor(
    public id: number,
    public name: string,
    public duration: number,
    public discripton: string,
    public image: string,
    public genre: string
  ) {}
}
