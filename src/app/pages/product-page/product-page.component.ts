import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { SearchPipe } from '../../pipes/search.pipe';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, FormsModule, SearchPipe],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class ProductPageComponent {
  products$: Observable<any[]> = new Observable();
  searchTerm: string = '';
  highlightProduct: boolean = false;
  constructor(private productService: ProductService, private router: Router) {
    console.log(this.searchTerm);
  }
  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  toggleHighlight() {
    this.highlightProduct = !this.highlightProduct;
  }

  goToProductDetails(productId: number) {
    this.router.navigate(['/product', productId]);
  }
}
