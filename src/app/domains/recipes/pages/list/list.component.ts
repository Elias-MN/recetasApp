import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RecipeComponent } from '../../components/recipe/recipe.component';
import { Recipe } from '../../../shared/models/recipe';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RecipeComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {

  listRecipes: Recipe[] = [];
  //listRecipes = signal<Recipe[]>([]);

  newRecipe: Recipe = {
    name: "Pizza",
    difficulty: 7,
    stars: 4,
    image: "https://picsum.photos/seed/1/400/400"
  }

  newRecipe2: Recipe = {
    name: "Tomates",
    difficulty: 8,
    stars: 1,
    image: "https://picsum.photos/seed/2/400/400"
  }

  newRecipe3: Recipe = {
    name: "Macarrones",
    difficulty: 5,
    stars: 3,
    image: "https://picsum.photos/seed/3/400/400"
  }

}
