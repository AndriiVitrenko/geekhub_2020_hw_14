import { Component } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent {
  articleList = [
    {
      title: 'Article 1',
      link: '/',
    },
    {
      title: 'Article 2',
      link: '/',
    },
    {
      title: 'Article 3',
      link: '/',
    },
    {
      title: 'Article 4',
      link: '/',
    },
    {
      title: 'Article 5',
      link: '/',
    },
    {
      title: 'Article 6',
      link: '/',
    },
  ]
}
