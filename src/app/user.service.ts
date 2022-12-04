import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRepoModel } from './models/UserRepoModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUserRepos(username: string) {
    return this.http.get<UserRepoModel[]>(
      `https://api.github.com/users/${username}/repos`
    );
  }
}
