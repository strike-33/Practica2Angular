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
  contador = 0
  alumnostotal:Usuarios[] = []
  estudiantesTotal = new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve(this.alumnostotal.length);
    }, 5000)
  }) 

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
    let alumnos = new Usuarios (this.nombreusr, this.apellidousr, this.emailusr);
    for(let i=0; this.click<1; i++){
      this.alumnostotal[this.contador] = alumnos;
      console.log(this.alumnostotal[this.contador]);
      this.click =1
      this.contador ++ 
      console.log(this.contador)
    }
    this.click=0;
  }

  ngOnInit(): void {
  }
}