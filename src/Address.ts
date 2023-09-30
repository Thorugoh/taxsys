export class Address  {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  number: number;

  constructor(country: string, state: string, city: string, neighborhood: string, number: number) {
    this.country = country;
    this.state = state;
    this.city = city;
    this.neighborhood = neighborhood;
    this.number = number;
  }
} 
