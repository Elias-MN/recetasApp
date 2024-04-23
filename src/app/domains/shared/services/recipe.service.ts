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

  filterString = signal<string>("");
  filterString$ = toObservable(this.filterString);

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  addRecipe(newRecipe: Recipe) {
    from(this.supabase
      .from('recipes')
      .insert([
        { name: newRecipe.name, difficulty: newRecipe.difficulty, stars: newRecipe.stars, image: newRecipe.image },
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

  getRecipe(id: string): Observable<Recipe[]> {
    return from(this.supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .then(response => response.data as Recipe[])
    );
  }

  getRecipesByDifficulty(difficulty: string) {
    from(this.supabase
      .from('recipes')
      .select('*')
      .eq('difficulty', difficulty)
      .then(response => {
        let result = response.data as Recipe[];
        this.recipeList.set(result);
      })
    );
  }


  async upload(bucket: string, filePath: string, file: File) {
    const { data, error } = await this.supabase.storage.from(bucket).upload(filePath, file);
    return { data, error };
  }

}
