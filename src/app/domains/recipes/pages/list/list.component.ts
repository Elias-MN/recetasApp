import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RecipeComponent } from '../../components/recipe/recipe.component';
import { Recipe } from '../../../shared/models/recipe';
import { RecipeService } from '../../../shared/services/recipe.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RecipeComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  listRecipes = signal<Recipe[]>([]);
  private recipeService = inject(RecipeService);

  ngOnInit() {

    this.recipeService.getRecipes();

    this.recipeService.recipeList$.subscribe({
      next: (changes) => {
        this.listRecipes.set(changes);
      }
    });
  }



}
