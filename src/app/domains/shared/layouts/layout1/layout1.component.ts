import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout1',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './layout1.component.html',
  styleUrl: './layout1.component.css'
})
export class Layout1Component {

}
