import { Component, OnInit } from '@angular/core';

/*para resibir o mostrar los datos que llegen por la url tienes primero que importar el router exactamente como esta aqui abajo*/

import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pagina-prueba',
  templateUrl: './pagina-prueba.component.html',
  styleUrls: ['./pagina-prueba.component.css']
})
export class PaginaPruebaComponent implements OnInit {

//luego crear una propiedad publica para recoger el dato en este caso nombre
public nombre: string; 
public apellidos: string;

  constructor( 

  /*luego aqui en el constructor agregar esto*/
  private _route: ActivatedRoute,
  private _router: Router


  ) { }

  ngOnInit() {
//luego esto  y mostramos la variable publica por el html del component con {{nombre}}

  this._route.params.subscribe((params: Params) =>{
  this.nombre = params.nombre;
  this.apellidos = params.apellidos;
  });

  }

redireccion(){
this._router.navigate(['/pagina-de-pruebas', 'victor', 'robles']);

}

}