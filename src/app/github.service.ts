import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class UserProfile {
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

  constructor(data: UserProfile){
    this.avatar_url = data.avatar_url || 'Not available';
    this.login = data.login || 'Not available';
    this.name = data.name || 'Not available';
    this.twitter_username = data.twitter_username || 'Not available';
    this.company = data.company || 'Not available';
    this.blog = data.blog || 'Not available';
    this.location = data.location || 'Not available';
    this.public_repos = data.public_repos;
    this.followers = data.followers;
    this.following = data.following;
    this.bio = data.bio || 'Not available';
    this.created_at = data.created_at;
  }

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
