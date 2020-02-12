import { Component, OnInit } from '@angular/core';

import { GitSearchService } from '../git-search.service';
import { GitSearch, ItemsEntity, Owner, License } from '../git-search';

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  private gitSearchService: GitSearchService;

  constructor(gitSearchService: GitSearchService) {

    this.gitSearchService = gitSearchService;
  }

  ngOnInit() {
  }

}
