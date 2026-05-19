import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { GalerieCarte } from './component/galerie-carte/galerie-carte';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';
import { HeroForm } from './component/hero-form/hero-form';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule, GalerieCarte, Header, Footer, HeroForm],
})
export class App {
  protected readonly title = signal('Gallerie-Cartes');

  formulaireEstVisible = false;

}
