import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  Valorswitch = "asd"
  nombre = "asdasd" ;
  apellido = "aasda";
  Genero = "asdasda";


  Usuarios: Usuarios=new Usuarios(this.nombre, this.apellido, this.Genero);





  verDatos(){
    console.log('Nombre: ', this.nombre) ;
    console.log('Apellido: ', this.apellido) ;
    console.log('Genero: ', this.Genero) ;

  }


  imprimirDatos(){
    if(this.Genero == "masculino" || this.Genero == "femenino"){
      this.Valorswitch = this.Genero;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
