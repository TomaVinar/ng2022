import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';

import { IComment } from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private _url = 'https://jsonplaceholder.typicode.com/comments'

  constructor(private http: HttpClient) {
  }

  getAllComments(): Observable<IComment []> {
    return this.http
      .get<IComment[]>(this._url);
  }

  getComment (id: string): Observable<IComment> {
    return this.http
      .get<IComment>(this._url + '/' + id);
  }
}
