import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {

public titulo: string;
public peliculas: Pelicula[];
public favorita: Pelicula;
public fecha: any;

  constructor(
private _PeliculaService: PeliculaService
 )
  {

this.titulo = "Peliculas"; 
this.peliculas = [
new Pelicula("Spiderman 4", 2019, './assets/css/images/spiderman2.jpg'),

new Pelicula("Avatar", 2013, './assets/css/images/avatar.webp'),

new Pelicula("BatmanvsSuperman", 2020, './assets/css/images/Batman.jpg'),


new Pelicula("avenger", 2020, './assets/css/images/Batman.jpg')

];
this.fecha = new Date(2020, 8, 12)

   }

  ngOnInit() {
  console.log(this._PeliculaService.holaMundo());
  
  }

  marcarFavorita(event){
this.favorita = event.pelicula;



  }

}
