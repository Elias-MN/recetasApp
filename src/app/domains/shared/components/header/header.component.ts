import { Component, inject } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../../models/recipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  myBucket = "https://kzploqbzeinvymobweco.supabase.co/storage/v1/object/public/images/";
  file!: File;
  filePath: string = "";

  addRecipe = new FormGroup({
    recipeName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    recipeDifficulty: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
    recipeStars: new FormControl('', [Validators.required, Validators.min(1), Validators.max(5)])
  });

  private recipeService = inject(RecipeService);

  submit() {
    let newRecipe: Recipe = {
      name: this.addRecipe.value.recipeName!,
      difficulty: Number(this.addRecipe.value.recipeDifficulty)!,
      stars: Number(this.addRecipe.value.recipeStars)!,
      image: `${this.myBucket}${this.filePath}`
    }
    this.recipeService.addRecipe(newRecipe);

    this.addRecipe.controls.recipeName.setValue("");
    this.addRecipe.controls.recipeDifficulty.setValue("");
    this.addRecipe.controls.recipeStars.setValue("");

  };

  async uploadPhoto(event: any) {

    try {
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('Debes seleccionar una imagen')
      }

      this.file = event.target.files[0];
      this.filePath = `receta_${Date.now()}.jpg`;
      this.recipeService.upload('images', this.filePath, this.file);


    } catch (error) {
      console.log(error);
    }
  }


}
