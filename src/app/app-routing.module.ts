import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout/layout.component';

let routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {path: 'users', loadChildren: () => import('./modules').then(value => value.UserModule)},
      {path: 'posts', loadChildren: () => import('./modules').then(value => value.PostModule)},
      {path: 'comments', loadChildren: () => import('./modules').then(value => value.CommentModule)}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {
}
