import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product!: Product; // Store product details

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit() {
    const productId = Number(this.route.snapshot.paramMap.get('id')); // Get product ID from route
    this.productService.getProductById(productId).subscribe((data) => {
      this.product = data;
    });
  }

  addToCart() {
    console.log('Product added to cart:', this.product);
    // Implement actual cart logic here
  }

  buyNow() {
    console.log('Buying product:', this.product);
    // Implement actual checkout logic here
  }
}
