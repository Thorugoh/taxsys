import { Address } from "./Address";

export class Customer {
  id: string;
  name: string;
  age: number;
  address: Address;
  phone: string;
  ssn: number;

  constructor(name: string, age: number, address: Address, phone: string, ssn: number) {
    this.id = 'foo-id';
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
    this.ssn = ssn;
  }

}
