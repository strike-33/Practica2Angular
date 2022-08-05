import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validator, Validators} from '@angular/forms';




@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})

export class ListaUsuariosComponent implements OnInit {  
  
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
 
  constructor() {}
  

  ngOnInit(): void {
  }
}