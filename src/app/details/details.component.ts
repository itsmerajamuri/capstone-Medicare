import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  product:Product;
  constructor(private service:ProductService,private route:ActivatedRoute){};
  ngOnInit(){
    const productId=this.route.snapshot.paramMap.get('productId');
    this.service.getProductById(Number(productId)).subscribe(x=>this.product=x);
  }

}

