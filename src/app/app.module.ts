import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CartComponent,
    ProductListComponent,
    ProductDetailsComponent,
    FooterComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
