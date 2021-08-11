import { Component } from '@angular/core';



@Component({
	selector: 'mi-componente',
	templateUrl: 'index.html'
})
export class miComponente{

public titulo: string;
public comentario: string;
public year: number;
public mostrarPeliculas: boolean;


	constructor(){
	this.titulo = "carros";
	this.comentario = "ferrari";
	this.year = 2020;
   this.mostrarPeliculas = true;


	console.log("componente cargado");
	console.log(this.titulo, this.comentario, this.year);
	}
	ocultarPeliculas(){
	this.mostrarPeliculas = false;
	}
}
