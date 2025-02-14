import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestServiceService {

  constructor(private http: HttpClient) { }

  getProductsrequest() : Observable<any>{
    return this.http.get('https://dummyjson.com/products', {
      params : {
        sortBy: 'name',
        order: 'desc',
      },
    })
  }

  getProductDetailsrequest(id : String) : Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
