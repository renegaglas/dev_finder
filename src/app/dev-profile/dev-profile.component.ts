import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


import { UserProfile } from './../github.service';

@Component({
  selector: 'app-dev-profile',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './dev-profile.component.html',
  styleUrl: './dev-profile.component.css'
})
export class DevProfileComponent {
  @Input() userProfile: UserProfile | undefined;
}
