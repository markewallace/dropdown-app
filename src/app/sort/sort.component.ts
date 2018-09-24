import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface SortEvent {
}

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss']
})
export class SortComponent {
  @Input()
  disabled = false;

  @Output()
  sortRequest = new EventEmitter<SortEvent>();

  constructor() {}

  get items() {
    return [
      { content: 'Most recent (newest - oldest)', selected: true },
      { content: 'Least recent (oldest - newest)' },
      { content: 'Alphabetical (A-Z)' },
      { content: 'Alphabetical (Z-A)' },
    ];
  }

  onSelected(event) {}

  onClose(event) {}
}

