import { Component, Input } from '@angular/core';

import { UserProfile } from './../github.service';

@Component({
  selector: 'app-dev-profile',
  standalone: true,
  imports: [],
  templateUrl: './dev-profile.component.html',
  styleUrl: './dev-profile.component.css'
})
export class DevProfileComponent {
  @Input() userProfile: UserProfile | undefined;
}
