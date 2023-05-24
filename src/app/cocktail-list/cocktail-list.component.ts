import { Component, } from '@angular/core';
import { CocktailServiceService } from '../cocktail-service.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.scss']
})
export class CocktailListComponent {
  cocktails: any = [];

  constructor(private CocktailServiceService: CocktailServiceService) { }

  ngOnInit() {
    this.cocktails = this.CocktailServiceService.getCocktails();
  }


}
