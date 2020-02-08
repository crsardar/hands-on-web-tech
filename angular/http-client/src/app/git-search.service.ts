import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GitSearch, ItemsEntity, Owner, License } from './git-search';
// import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitSearchService {

  private httpClient: HttpClient;

  constructor(http: HttpClient) {
    this.httpClient = http;
  }

  gitSearch(query: string) {

    const observable = this.httpClient.get('https://api.github.com/search/repositories?q=' + query);

    observable.subscribe(result => {
      console.log('Result = ' + JSON.stringify(result));
      this.myMethod(result as GitSearch);
    },
      erro => {
        console.log('Error = ' + erro);
      });
  }

  myMethod(gitSearch: GitSearch) {
    if (gitSearch) {
      alert('Number of results = ' + gitSearch.total_count);
    }
  }
}
