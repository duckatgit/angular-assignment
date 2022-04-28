export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  geo: GEO;
  company: Company;
}

export interface Address {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
}

export interface GEO {
  lat: string;
  lng: string;
}

export interface Company {
  bs: string;
  catchPhrase: string;
  name: string;
}
