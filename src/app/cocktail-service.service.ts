import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailServiceService {

  cocktails = [
    { nom: 'Mojito', prix: 8.50, image: 'https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg' },
    { nom: 'Cosmopolitan', prix: 10.00, image: 'https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg' },
    { nom: 'Margarita', prix: 9.00, image: 'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg' }
  ];

  constructor() { }

  getCocktails() {
    return this.cocktails;
  }




}
