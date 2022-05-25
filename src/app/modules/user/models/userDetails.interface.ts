import {IUser} from './user.interface';

export interface IUserDetails extends IUser {
  email: string;
  phone: string;
  website: string;
  address: IAddress;
  company: ICompany;
}


export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}


export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}
