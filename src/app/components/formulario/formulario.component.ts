import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
public user: any;
public campo: string;
public enter: string;

  constructor() {
this.user = {
	nombre: '',
	apellidos: '',
	bio: '',
	genero: ''
}

   }

  ngOnInit() {
  }

  onSubmit(){
  alert("Formulario enviado!!");
  console.log(this.user);
  }
  hasdadoClick(){
  alert('has dado click');
  }

DisteEnter(){
	alert("has dado enter");
}
}
