import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';

import { Source } from './classes/source';
import { Topic, TOPICS } from './classes/topics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'NG2-News';
  topics : Topic[];
  sources : Source[];
  isMobileMenuShowing = false;

  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.topics = TOPICS;
    this.getSources('sport');  
  }

  getSources(topicID: string): void {
    this.newsService.getSources(topicID).then(sources => this.sources = sources);
  }

  onTopicSelect(topicID: string): void {
    this.getSources(topicID);
    //hide menu on mobile
    if(this.isMobileMenuShowing) this.isMobileMenuShowing = false;
  }

  toggleMobileMenu() :void {
    this.isMobileMenuShowing = !this.isMobileMenuShowing;
  }

}

