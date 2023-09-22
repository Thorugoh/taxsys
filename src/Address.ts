export class Address  {
  country: String;
  state: String;
  city: String;
  neighborhood: String;
  number: number;

  constructor( country: String, state: String, city: String, neighborhood: String, number: number) {
    this.country = country;
    this.state = state;
    this.city = city;
    this.neighborhood = neighborhood;
    this.number = number;
  }
} 
