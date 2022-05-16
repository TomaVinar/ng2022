import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

import {IComment} from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<IComment []> {
    return this.http
      .get<IComment[]>(this.url);
  }

  getComment(id: number): Observable<IComment> {
    return this.http
      .get<IComment>(this.url + '/' + id);
  }
}
