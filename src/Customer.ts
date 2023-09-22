import { Address } from "./Address";

export class Customer {
  id: String;
  name: String;
  age: number;
  address: Address;
  phone: String;
  ssn: number;

  constructor(name: String, age: number, address: Address, phone: String, ssn: number) {
    this.id = 'foo-id';
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.ssn = ssn;
  }

}
