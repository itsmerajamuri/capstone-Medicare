import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string="http://localhost:8080/product/";

  constructor(private http : HttpClient) { }
  getAllProducts():Observable<Product[]>{
   return this.http.get<Product[]>(this.baseUrl);
  }
  getProductById(productId:number):Observable<Product>{
    return this.http.get<Product>(this.baseUrl+productId);
  }
  deleteuserById(productId:number){
    return this.http.delete(this.baseUrl+productId);
  }
  addproduct(obj:Product){
return this.http.post(this.baseUrl,obj);
  }
}
