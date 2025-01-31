import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductPageComponent } from './product-page.component';
import { ProductService } from '../../services/product.service';

@NgModule({
  imports: [CommonModule, ProductPageComponent],
  providers: [ProductService],
})
export class ProductPageModule {}
