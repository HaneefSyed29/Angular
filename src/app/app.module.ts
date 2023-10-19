import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserAuthModule } from './user-auth/user-auth.module'
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos/todos.component';
import { LoginComponent } from './Component/login/login.component';
import { DummyComponent } from './dummy/dummy.component';
import { UserComponent } from './user/user.component';
import { UserNameComponent } from './user-name/user-name.component';
import { UserDataComponent } from './user-data/user-data.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    LoginComponent,
    DummyComponent,
    UserComponent,
    UserNameComponent,
    UserDataComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
