import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  standalone: true,
})
export class SearchPipe implements PipeTransform {
  transform(products: any[] | null, searchTerm: string): any[] {
    if (!products) {
      return [];
    }
    if (!searchTerm) {
      return products;
    }
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
