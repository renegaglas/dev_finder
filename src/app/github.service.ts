import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface UserProfile {
  avatar_url: string;
  login: string;
  name: string;
  twitter_username: string;
  company: string;
  blog: string;
  location: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
  created_at: Date;
}


@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl: string = 'https://api.github.com/users';

  constructor(private http: HttpClient) { }

  getUserProfile(username: string): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.baseUrl}/${username}`);
  }


}
