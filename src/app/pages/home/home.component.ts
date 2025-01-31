// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   imports: [],
//   templateUrl: './home.component.html',
//   styleUrl: './home.component.scss'
// })
// export class HomeComponent {

// }

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    ProductListComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  searchQuery: string = '';
  selectedCategory: string = 'All';

  products = [
    { name: 'Smartphone', price: 299.99, category: 'Electronics' },
    { name: 'T-Shirt', price: 19.99, category: 'Clothing' },
    { name: 'Microwave', price: 89.99, category: 'Home Appliances' },
  ];

  updateSearch(query: string) {
    this.searchQuery = query;
  }

  updateCategory(category: string) {
    this.selectedCategory = category;
  }
}
