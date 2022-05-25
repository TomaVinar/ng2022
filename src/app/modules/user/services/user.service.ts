import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {IUser} from "../models/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<IUser []> {
    return this.httpClient.get<IUser []>(this._url)
  }

  getSingleUser(id: string): Observable<IUser> {
    return this.httpClient.get <IUser>(this._url + '/' + id);
  }
}
