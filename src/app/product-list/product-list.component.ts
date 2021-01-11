import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  appendedHtml: string = '<div><b>Added</b></div>';
  // buttonDisable: boolean = false ;
  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.products = this.getProductsList();
  }

  getProductsList() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  addToCart(product) {
    this.cartService.items.push(product);
    // this.products = this.products + this.appendedHtml;
    return (alert('<i class="fas fa-check-circle"></i>'))
    
    }
 

    

    
}

