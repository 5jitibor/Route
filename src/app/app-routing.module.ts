import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ListProductsComponent } from './list-products/list-products.component';
import { ProductsComponent } from './products/products.component';


const routes: Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: HomeComponent },
  {path:'faq', component: FaqComponent },
  {path:'products', component: ProductsComponent},
  {path: 'list-products/:id', component: ListProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
