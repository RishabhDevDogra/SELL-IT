import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { SignInComponent } from './components/auth/signin.component';
import { SignUpComponent } from './components/auth/signup.component';
import { AddEditComponent } from './components/inventory/add_edit.component';
import { ListComponent } from './components/inventory/list.component';

import { QuestionComponent } from './components/inventory/question.component';
import { IndexComponent } from './components/index.component';


import { IndexModule } from './components/index.module';
import { InventoryModule } from "./components/inventory/inventory.module";
import { AuthModule } from './components/auth/auth.module';
import { AuthGuard } from "./components/auth/auth.guard";

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserModule,
    IndexModule,
    InventoryModule,
    AuthModule,
    RouterModule.forRoot([
      { path: "", component: IndexComponent },
      { path: "inventory/list", component: ListComponent },
      { path: "inventory/:mode", component: AddEditComponent, canActivate: [AuthGuard]},
      { path: "inventory/:mode/:id", component: AddEditComponent, canActivate: [AuthGuard] },
      { path: "question/add/:id", component: QuestionComponent },
      { path: "question/:mode/:id", component: QuestionComponent, canActivate: [AuthGuard]  },
      { path: "users/signin", component: SignInComponent },
      { path: "users/signup", component: SignUpComponent },
      { path: "**", redirectTo: "" }
    ]),
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
