import { Component, Input } from '@angular/core';
import { Recipe } from '../../../shared/models/recipe';
import { MultiplyDifficultyPipe } from '../../../shared/pipes/multiply-difficulty.pipe';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [MultiplyDifficultyPipe],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  @Input({ required: true }) recipe!: Recipe;

}
