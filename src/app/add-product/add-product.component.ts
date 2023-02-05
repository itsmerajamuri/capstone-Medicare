import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private service:ProductService){}

  product:Product=new Product();
  onSubmit(){
    this.service.addproduct(this.product).subscribe(x=>console.log(x))
    alert("data submitted successfully");
  }
}
