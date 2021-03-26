import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ArticleListComponent} from './components/article-list/article-list.component';
import {ArticleComponent} from './components/article/article.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {SignupPageComponent} from './components/signup-page/signup-page.component';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import { HeaderComponent } from './components/header/header.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MainComponent } from './components/main/main.component';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleComponent,
    LoginPageComponent,
    SignupPageComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
