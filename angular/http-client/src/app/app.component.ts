import { Component } from '@angular/core';

import { GitSearchService } from './git-search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http-client';

  constructor(private gitSearchService: GitSearchService) {
  }

  onClick(event: Event) {
    this.gitSearchService.gitSearch('angular');
  }
}
