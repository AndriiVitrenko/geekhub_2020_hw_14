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
      id: '1',
    },
    {
      title: 'Article 2',
      id: '2',
    },
    {
      title: 'Article 3',
      id: '3',
    },
  ];
}
