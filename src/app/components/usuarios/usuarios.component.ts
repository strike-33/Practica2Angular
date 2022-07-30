import { Component, OnInit } from '@angular/core';
import { Usuarios } from './usuarios';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
 






  constructor() { }
  nombre = ""
  apellido = ""
  Genero = ""
  click = 0 
  contador = 0
  alumnostotal:any[] = []



  CrearAlumno(){
    let alumnos = new Usuarios (this.nombre, this.apellido, this.Genero);
    for(let i=0; this.click<1; i++){
      this.alumnostotal[this.contador] = alumnos;
      console.log(this.alumnostotal[this.contador]);
      this.click =1
      this.contador ++ 
      console.log(this.contador)
    }
    this.click=0;
   
      
    
  }

  MostrarAlumnos(){
    for(let i = 0; this.contador>i ; i++){
        console.log(this.alumnostotal[i])
    }

  }






  ngOnInit(): void {
  }

}
