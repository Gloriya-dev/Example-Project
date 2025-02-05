import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { authInterceptor } from './interceptors/auth.interceptor';
import { AuthGuard } from './guards/auth.guard';
// import { HomeComponent } from './pages/home/home.component';
// import { SigninComponent } from './components/signin/signin.component';
// import { SignupComponent } from './components/signup/signup.component';
// import { ProductPageComponent } from './pages/product-page/product-page.component';
// import { ProductDetailsComponent } from './pages/product-details/product-details.component';
// import { CartComponent } from './pages/cart/cart.component';
// import { CheckoutComponent } from './pages/checkout/checkout.component';

export const routes: Routes = [
  //   { path: '', component: HomeComponent },
  //   { path: 'signin', component: SigninComponent },
  //   { path: 'signup', component: SignupComponent },

  //   {
  //     path: 'products',
  //     component: ProductPageComponent,
  //   },
  //   { path: 'product/:id', component: ProductDetailsComponent },
  //   { path: 'cart', component: CartComponent },
  //   { path: 'checkout', component: CheckoutComponent },

  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((com) => com.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./components/signin/signin.component').then(
        (com) => com.SigninComponent
      ),
  },
  {
    path: 'signup',
    loadComponent: () =>
      import('./components/signup/signup.component').then(
        (com) => com.SignupComponent
      ),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./pages/product-page/product-page.component').then(
        (com) => com.ProductPageComponent
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'product/:id',
    loadComponent: () =>
      import('./pages/product-details/product-details.component').then(
        (com) => com.ProductDetailsComponent
      ),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./pages/cart/cart.component').then((com) => com.CartComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./pages/checkout/checkout.component').then(
        (com) => com.CheckoutComponent
      ),
  },
  {
    path: 'checkout_details',
    loadComponent: () =>
      import('./pages/checkout-form/checkout-form.component').then(
        (com) => com.CheckoutFormComponent
      ),
  },
];

export const appConfig = [
  provideRouter(routes),
  provideHttpClient(withInterceptors([authInterceptor])),
];
