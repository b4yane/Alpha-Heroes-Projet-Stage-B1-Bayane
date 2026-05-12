import { Component, signal } from '@angular/core';
import { GalerieCarte } from './component/galerie-carte/galerie-carte';
import { Header } from './component/header/header';
import { HeroDetail } from './component/hero-detail/hero-detail';
import { Footer } from './component/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [GalerieCarte, Header, HeroDetail, Footer],
})
export class App {
  protected readonly title = signal('Gallerie-Cartes');
}
