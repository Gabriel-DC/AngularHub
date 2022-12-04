import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRepoModel } from '../models/UserRepoModel';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css'],
})
export class SearchResultComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  username!: string;

  userRepos!: Observable<UserRepoModel[]>;

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.username = String(routeParams.get('username'));
  }
}
