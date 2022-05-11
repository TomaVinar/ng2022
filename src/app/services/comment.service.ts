import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IComment} from '../models/IComment';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<IComment []> {
    return this.http
      .get<any[]>(this.url);
  }

  getComment (id: number): Observable<IComment> {
    return this.http
      .get<any>(this.url + '/' + id);
  }
}
