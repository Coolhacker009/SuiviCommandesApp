import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { PanierAchatComponent } from './panier-achat/panier-achat.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { SuiviCommandesComponent } from './suivi-commandes/suivi-commandes.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageSignupComponent } from './page-signup/page-signup.component';
import { PageProductComponent } from './page-product/page-product.component';



const routes: Routes = [
  {path:"", component: PageHomeComponent},
  {path:"produit", component: ListeProduitsComponent},
  {path:"panier", component: PanierAchatComponent},
  {path:"commande", component: SuiviCommandesComponent},
  {path:"login", component: PageLoginComponent},
  {path:"signup",component:PageSignupComponent},
  {path:"product/:id",component:PageProductComponent}, 
 
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
