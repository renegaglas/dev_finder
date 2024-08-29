import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dev-search',
  standalone: true,
  imports: [],
  templateUrl: './dev-search.component.html',
  styleUrl: './dev-search.component.css'
})
export class DevSearchComponent {

  @Output() devNameChange: EventEmitter<string> = new EventEmitter();

  search_to_app(devName: string) {
    this.devNameChange.emit(devName);
  }
}
