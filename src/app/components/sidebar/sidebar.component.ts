import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  @Output() searchQueryChanged = new EventEmitter<string>();
  @Output() categoryChanged = new EventEmitter<string>();

  searchQuery: string = '';
  categories: string[] = ['All', 'Electronics', 'Clothing', 'Home Appliances'];

  onSearch() {
    this.searchQueryChanged.emit(this.searchQuery);
  }

  selectCategory(category: string) {
    this.categoryChanged.emit(category);
  }
}
