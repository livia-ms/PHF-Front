import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './auth-guard/auth-guard.guard';
import { ChangePasswordComponent } from './views/change-password/change-password.component';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  // {
  //   canActivate: [AuthGuardGuard]
  // },
  {
    path: '', 
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path:'cadastro',
     component: CreateUserComponent,
     pathMatch: 'full'
    },
  {
    path: 'trocadesenha',
    component: ChangePasswordComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
