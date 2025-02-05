import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.scss'],
})
export class CheckoutFormComponent {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.checkoutForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['', Validators.required],
      products: this.fb.array([]),
    });

    // Log form validity changes
    this.checkoutForm.valueChanges.subscribe(() => {
      console.log('Form Validity:', this.checkoutForm.valid);
    });
  }

  get products() {
    return this.checkoutForm.get('products') as FormArray;
  }

  addProduct() {
    const productForm = this.fb.group({
      productName: ['', Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      size: ['', Validators.required],
      color: ['', Validators.required],
    });

    this.products.push(productForm);
  }

  removeProduct(index: number) {
    this.products.removeAt(index);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      console.log('Checkout Data:', this.checkoutForm.value);
      alert('Order Placed Successfully!');
      this.router.navigate(['/checkout']);
    } else {
      alert('Please fill all required fields.');
    }
  }

  resetForm() {
    this.checkoutForm.reset();
    this.products.clear();
  }
}
