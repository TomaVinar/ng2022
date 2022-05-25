import {Component, Input, OnInit} from '@angular/core';

import { IPost } from '../../models/post.interface';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  post: IPost;

  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
  }

  getPostDetails() {
    this.router.navigate([this.post.id], {relativeTo: this.activatedRoute})
  }
}
