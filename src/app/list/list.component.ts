import { Component } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  products:Product[];
  constructor(private product:ProductService){}
  ngOnInit(){
    this.product.getAllProducts().subscribe(x=>this.products=x);
  }
  onDelete(productId:number){
    this.product.deleteuserById(productId).subscribe(x=>console.log(x));
   this.products=  this.products.filter(x=> x.productId!==productId);

  }


}
