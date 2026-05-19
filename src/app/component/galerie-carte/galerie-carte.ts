import { Component, OnInit } from '@angular/core';
import { HeroDetail } from '../hero-detail/hero-detail';
import { HeroService } from '../../services/hero/hero-service';

@Component({
  selector: 'app-galerie-carte',
  standalone: true,
  imports: [HeroDetail],
  templateUrl: './galerie-carte.html',
  styleUrl: './galerie-carte.css',
})

export class GalerieCarte implements OnInit {
  
  listeHeros: any[] = [];

  heroSelectionne: any = null;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.listeHeros = this.heroService.getHeros();
  }

  selectionnerHero(heroClique: any) {
    this.heroSelectionne = heroClique;
    console.log('Héro sélectionné :', this.heroSelectionne.nom);
  }
}