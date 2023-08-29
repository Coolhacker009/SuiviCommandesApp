import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  
  export interface produit{
    id: number;
    nom: string;
    description: string;
    prix: number;
}

export interface commande{
  id: number;
  produits: string;
  dateCommande: Date;
  etat: string;
}

export interface Client{
  id: number;
  nom: string;
  prenom:string
  email : string
  commandes:commande[];
}






