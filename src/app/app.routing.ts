import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './guards/auth.guard';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { ListsComponent } from './lists/lists.component';
import { FriendsComponent } from './friends/friends.component';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lists',
    pathMatch: 'full'
  },
  {
    path: 'lists',
    component: ListsComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'friends',
    component: FriendsComponent,
  },
  {
    path: 'configs',
    component: AccountComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
