import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPost} from "../models/IPost";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {

  }

  getAllPost(): Observable<IPost[]> {
    return this.http
      .get<any []>(this.url)
  }

  getPost(id: number): Observable<IPost> {
    return this.http
      .get<any>(this.url + '/' + id)
  }

}
