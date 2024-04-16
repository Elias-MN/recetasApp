import { Component, Input, inject, signal } from '@angular/core';
import { RecipeService } from '../../../shared/services/recipe.service';
import { Recipe } from '../../../shared/models/recipe';
import { FormatTimePipe } from '../../../shared/pipes/format-time.pipe';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [FormatTimePipe],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export default class DetailsComponent {

  @Input() id?: string;
  private recipeService = inject(RecipeService);

  recipeDetails = signal<Recipe | null>(null);

  ngOnInit() {
    if (this.id) {
      this.recipeService.getRecipe(this.id).subscribe({
        next: (data) => {
          this.recipeDetails.set(data[0]);
        }
      })
    }


  }


}
