import { identifierModuleUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  idNumber: number | undefined;
  constructor(private route:ActivatedRoute) {
    route.params.subscribe(myParams => {this.idNumber = myParams['id'];})
   }

  ngOnInit(): void {
  }

}
