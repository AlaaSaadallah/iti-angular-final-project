  
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { CartService } from '../cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product
  constructor(
    private route : ActivatedRoute,
    private cartService : CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const routeValues = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeValues.get('productId'));
    this.http.get("https://fakestoreapi.com/products/" + productIdFromRoute).subscribe((product) => {
      this.product = product;
    });
  }

}
