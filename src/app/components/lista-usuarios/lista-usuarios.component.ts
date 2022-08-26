import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Usuarios } from './usuarios';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})


export class ListaUsuariosComponent implements OnInit {  

  alumnostotal:Usuarios[] = []
  estudiantesTotal = new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve(this.alumnostotal.length);
    }, 15000)
  }) 

  selectedUsuario : Usuarios = new Usuarios();

  personaModel= new FormGroup({
  nombre: new FormControl("", [Validators.required, Validators.minLength(2)]),
  apellido: new FormControl("", [Validators.required, Validators.minLength(2)]),
  email: new FormControl("", [Validators.required, Validators.email])
  });
  get nombrecontrol(): FormControl{
    return this.personaModel.get('nombre') as FormControl;
  }

  get apellidocontrol(): FormControl{
    return this.personaModel.get('apellido') as FormControl;
  }
  get emailcontrol(): FormControl{
    return this.personaModel.get('email') as FormControl;
  }

  
  CrearAlumno2(){
    if(this.selectedUsuario.id === 0){
    this.selectedUsuario.id = this.alumnostotal.length + 1;
    this.alumnostotal.push(this.selectedUsuario);
    }
    this.selectedUsuario = new Usuarios;
  }

Eliminar(){
  if(confirm('Estas seguro que queres eliminarlo?')){
    this.alumnostotal= this.alumnostotal.filter(x => x != this.selectedUsuario);
    this.selectedUsuario = new Usuarios;
  }
}


  EditarUsuario(alumnos: Usuarios){
  this.selectedUsuario = alumnos;
  }


  ngOnInit(): void {
  }
}