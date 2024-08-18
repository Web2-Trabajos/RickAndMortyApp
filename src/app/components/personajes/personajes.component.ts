import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rickandmorty.service';
import { Character } from '../../models/Character';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
   selector: 'app-personajes',
   templateUrl: './personajes.component.html',
   styleUrls: ['./personajes.component.scss'],
   standalone: true,
   imports: [MatCardModule, CommonModule,]
})
export class PersonajesComponent implements OnInit {

   characters: Character[] = [];

   constructor(private rickAndMortyService: RickAndMortyService) {}

   ngOnInit(): void {
      this.rickAndMortyService.getAllCharacters().subscribe((data: any) => {
         this.characters = data.results;
      });
   }
}
