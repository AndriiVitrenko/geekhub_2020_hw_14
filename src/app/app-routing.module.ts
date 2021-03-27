import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {SignupPageComponent} from "./components/signup-page/signup-page.component";
import {HomeComponent} from "./components/home/home.component";
import {ArticleListComponent} from "./components/article-list/article-list.component";
import {ArticleComponent} from "./components/article/article.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'log-in',
    component: LoginPageComponent,
  },
  {
    path: 'sign-up',
    component: SignupPageComponent,
  },
  {
    path: 'article-list',
    component: ArticleListComponent,
  },
  {
    path: 'article-list/article',
    component: ArticleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
