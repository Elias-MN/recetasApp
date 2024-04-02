import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/components/header/header.component';
import { FooterComponent } from '../../../shared/components/footer/footer.component';
import { RecipeComponent } from '../../components/recipe/recipe.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RecipeComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}
