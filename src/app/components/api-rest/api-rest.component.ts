import { Component, OnInit } from '@angular/core';
import { PersonaService } from 'src/app/services/persona.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-api-rest',
  templateUrl: './api-rest.component.html',
  styleUrls: ['./api-rest.component.css']
})
export class ApiRestComponent implements OnInit {

  constructor(private personaService: PersonaService) { 
    this.personaService.getPersonas().subscribe(resp=>{console.log(resp)})
  }

  ngOnInit(): void {
  }

}
