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
  nombreusr = ""
  apellidousr = ""
  emailusr = ""
  click = 0 
  id = 0
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

  CrearAlumno(){
    this.id ++
    let alumnos = new Usuarios (this.nombreusr, this.apellidousr, this.emailusr, this.id);
    for(let i=0; this.click<1; i++){
      this.alumnostotal[this.id -1] = alumnos;
      console.log(this.alumnostotal[this.id -1]);
      this.click =1
      console.log(this.id)
    }
    this.click=0;
  }


  EditarUsuario(alumnos: Usuarios){
  if(alumnos.id != 0 ){
    console.log(alumnos.id);
  }
  }


  ngOnInit(): void {
  }
}