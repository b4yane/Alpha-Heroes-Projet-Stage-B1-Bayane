import { Component } from '@angular/core';
import { HeroDetail } from '../hero-detail/hero-detail';

@Component({
  selector: 'app-galerie-carte',
  imports: [HeroDetail],
  templateUrl: './galerie-carte.html',
  styleUrl: './galerie-carte.css',
})

export class GalerieCarte {
  listeHeros = [
  {
    nom: 'Spider-Man',
    identiteSecrete: 'Peter Parker',
    descriptionCourte: 'Votre araignée sympa du quartier.',
    descriptionLongue: 'Mordu par une araignée radioactive, Peter Parker a acquis des pouvoirs incroyables. Il jongle entre sa vie d\'étudiant et son rôle de protecteur de New York, apprenant chaque jour qu\'un grand pouvoir implique de grandes responsabilités.',
    localisation: 'New York (Queens)',
    image: '/images/spiderman.jpg',
    stats: { force: 75, intelligence: 85, agilite: 95 },
    couleur: '#e74c3c' 
  },
  {
    nom: 'Iron Man',
    identiteSecrete: 'Tony Stark',
    descriptionCourte: 'Génie, milliardaire, playboy, philanthrope.',
    descriptionLongue: 'Tony Stark est un industriel de génie qui a créé une armure de haute technologie pour échapper à ses ravisseurs. Depuis, il utilise sa fortune et son intelligence pour protéger le monde sous l\'armure d\'Iron Man.',
    localisation: 'New York / Malibu',
    image: '/images/ironman.jpg',
    stats: { force: 85, intelligence: 98, agilite: 60 },
    couleur: '#f1c40f' 
  },
  {
    nom: 'Batman',
    identiteSecrete: 'Bruce Wayne',
    descriptionCourte: 'Je suis la vengeance. Je suis la nuit.',
    descriptionLongue: 'Après avoir perdu ses parents, Bruce Wayne a parcouru le monde pour s\'entraîner et devenir le plus grand détective et combattant. Il protège Gotham City en utilisant sa peur comme une arme contre les criminels.',
    localisation: 'Gotham City',
    image: '/images/batman.jpg',
    stats: { force: 70, intelligence: 95, agilite: 85 },
    couleur: '#2c3e50' 
  }
];

  heroSelectionne: any;

  selectionnerHero(heroClique: any) {
    this.heroSelectionne = heroClique;
    console.log('Héro sélectionné :', this.heroSelectionne.nom);
  }
}