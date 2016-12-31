import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Article } from './classes/article';
import { Source } from './classes/source';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NewsService {

  private newsApiKey = '42766f128e0647a1a0eea181d789e613';
  //private newsApiSource = 'the-next-web';
  //private newsApiSortBy = 'latest';
  private newsApiBaseUrl = 'https://newsapi.org/v1/';
  private articlesUrl = 'articles?';
  private sourcesUrl = 'sources?';
  //private newsApiUrl = this.newsApiBaseUrl+'source='+this.newsApiSource+'&sortBy='+this.newsApiSortBy+'&apiKey='+this.newsApiKey;  // URL to web api
  
  constructor(private http: Http) {}

  getArticles(newsApiSource: string): Promise<Article[]> {

    let newsApiUrl = this.newsApiBaseUrl+this.articlesUrl+'source='+newsApiSource+'&apiKey='+this.newsApiKey;  // URL to web api
    
    return this.http.get(newsApiUrl)
               .toPromise()
               .then(response => response.json().articles as Article[])
               .catch(this.handleError);
  }

  getSources(newsApiCategory: string): Promise<Source[]> {

    let newsApiUrl = this.newsApiBaseUrl+this.sourcesUrl+'language=en&category='+newsApiCategory;  // URL to web api
    
    return this.http.get(newsApiUrl)
               .toPromise()
               .then(response => response.json().sources as Source[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
