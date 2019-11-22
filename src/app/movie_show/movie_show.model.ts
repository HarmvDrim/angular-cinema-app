export class FilmShow {
  // Optioneel description attribuut
  description = '-'

  constructor(
    public id: number,
    public movieName: string,
    public image: string,
    public hall: string,
    public seats: string,
    public time: Date
  ) {}
}
