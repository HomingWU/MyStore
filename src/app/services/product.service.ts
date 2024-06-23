import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private dataUrl: string = 'data.json';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.dataUrl);
  }

  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts().pipe(
      map((products) => products.find((product) => product.id === id))
    );
  }
}
