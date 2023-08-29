import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { PanierAchatComponent } from './panier-achat/panier-achat.component';
import { SuiviCommandesComponent } from './suivi-commandes/suivi-commandes.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { PageProductComponent } from './page-product/page-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeProduitsComponent,
    PanierAchatComponent,
    SuiviCommandesComponent,
    PageLoginComponent,
    PageHomeComponent,
    NavbarComponent,
    PageSignupComponent,
    PageProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
