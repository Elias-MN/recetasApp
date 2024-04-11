import { Injectable, signal } from '@angular/core';
import { environment } from './environment';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { Recipe } from '../models/recipe';
import { Observable, from } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private supabase: SupabaseClient;

  recipeList = signal<Recipe[]>([]);
  recipeList$ = toObservable(this.recipeList);

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  addRecipe(newRecipe: Recipe) {
    from(this.supabase
      .from('recipes')
      .insert([
        { name: newRecipe.name, difficulty: newRecipe.difficulty },
      ])
      .select()
      .then(response => {
        let result = response.data as Recipe[];
        this.recipeList.update(currentRecipeList => [...currentRecipeList, result[0]]);
      })
    );
  }


  getRecipes() {
    from(this.supabase
      .from('recipes')
      .select('*')
      .then(response => {
        let result = response.data as Recipe[];
        this.recipeList.set(result);
      })
    );
  }


}