import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LoginComponent } from './views/login/login.component';
import { BgBallsComponent } from './components/bg-balls/bg-balls.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateUserComponent } from './views/create-user/create-user.component';
import { ChangePasswordComponent } from './views/change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LoginComponent,
    BgBallsComponent,
    FooterComponent,
    CreateUserComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
