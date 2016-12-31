import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from '../news.service';
import { Article } from '../classes/article';
import { Source } from '../classes/source';

@Component({
  selector: 'app-news-source',
  templateUrl: './news-source.component.html',
  styleUrls: ['./news-source.component.css']
})
export class NewsSourceComponent implements OnInit {

  articles : Article[];
  //firstArticle : Article;
  //moreArticles :Article[];

  @Input()
  myNewsSource : Source;


  constructor(private newsService:NewsService) { }

  ngOnInit() {
    this.getArticles();
    //this.firstArticle = this.articles[0];
    //this.moreArticles = this.articles.slice(1);
  }

  getArticles(): void {
    this.newsService.getArticles(this.myNewsSource.id).then(articles => this.articles = articles);
  }


}
