import { Component } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../../models/recipe';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLinkWithHref, FormsModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  addRecipe = new FormGroup({
    recipeName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    recipeDifficulty: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)])
  });


  submit() {

    let newRecipe: Recipe = {
      name: this.addRecipe.value.recipeName!,
      difficulty: Number(this.addRecipe.value.recipeDifficulty)!,
      stars: 4,
      image: "https://picsum.photos/seed/1/400/400"
    }

  };

}
