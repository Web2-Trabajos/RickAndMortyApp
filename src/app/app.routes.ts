import { Routes } from '@angular/router';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { EpisodiosComponent } from './components/episodios/episodios.component';

export const routes: Routes = [
    { path: '', component: PersonajesComponent },
    { path: 'personajes', component: PersonajesComponent },
    { path: 'episodios', component: EpisodiosComponent }
];

