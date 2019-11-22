export class Hall {
  // Optioneel description attribuut
  description = '-'

  constructor(
    public id: number,
    public name: string,
    public seats: number,
    public movie: string
  ) {}
}
