import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  id: number;
  text: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
      .then(res => res.json())
      .then(res => this.text = res.body)
      .catch(error => console.log(error))
  }

}
