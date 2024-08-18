import { Component, OnInit } from '@angular/core';
import { Episode } from '../../models/Episode';
import { RickAndMortyService } from '../../services/rickandmorty.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-episodios',
  standalone: true,
  imports: [MatTableModule, CommonModule, ],
  templateUrl: './episodios.component.html',
  styleUrl: './episodios.component.scss'
})
export class EpisodiosComponent implements OnInit {

  episodes: Episode[] = [];
  displayedColumns: string[] = ['id', 'name', 'air_date', 'episode', 'created'];

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
     this.rickAndMortyService.getAllEpisodes().subscribe((data: any) => {
        this.episodes = data.results;
     });
  }
}