import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path:"products",
    component:ListComponent
  },
    
      {
        path:"add",
        component:AddProductComponent
      },
   
  
  {
    path:"details/:productId",
    component:DetailsComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"userLogin",
    component:UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
