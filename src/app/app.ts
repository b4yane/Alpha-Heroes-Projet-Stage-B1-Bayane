import { Component, signal } from '@angular/core';
import { GalerieCarte } from './component/galerie-carte/galerie-carte';
import { Header } from './component/header/header';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [GalerieCarte, Header, Footer],
})
export class App {
  protected readonly title = signal('Gallerie-Cartes');
}
