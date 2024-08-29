import { Component } from '@angular/core';

import { DevSearchComponent } from './dev-search/dev-search.component'

import { DevProfileComponent } from './dev-profile/dev-profile.component'

import { GithubService, UserProfile } from './github.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DevSearchComponent, DevProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  userProfile: UserProfile | undefined;

  setDevName(newDevName: string) {
    this.getUserProfile(newDevName);
  }

  constructor(private githubService: GithubService) { }

  getUserProfile(username: string) {
    this.githubService.getUserProfile(username).subscribe(
      data => {
        console.log(data);
        this.userProfile = data;
      },
      error => {
        console.error('Error fetching profile', error);
      },

    );
  }

}
