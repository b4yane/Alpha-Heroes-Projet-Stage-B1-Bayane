import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { HeroService } from '../../services/hero/hero-service';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-form.html',
  styleUrl: './hero-form.css',
})

export class HeroForm {
  nouveauHero: any = {
    nom: '',
    identiteSecrete: '',
    descriptionCourte: '',
    descriptionLongue: '',
    localisation: '',
    image: '/images/nvuser.jpg',
    stats: { force: 0, intelligence: 0, agilite: 0 },
    couleur: '#5a5a5a',  
  };

  constructor(private heroService: HeroService) {}

  ajouterHero() {
    this.heroService.addHero(this.nouveauHero);

    this.nouveauHero = {
      nom: '',
      identiteSecrete: '',
      descriptionCourte: '',
      descriptionLongue: '',
      localisation: '',
      image: '/images/nvuser.jpg',
      stats: { force: 0, intelligence: 0, agilite: 0 },
      couleur: '#5a5a5a',  
    };

    alert('Héros ajouté avec succès !');
  }
}
