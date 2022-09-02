import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ModuloMaterialModule } from '../app/modules/material-fiat/material-fiat.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { NabvarComponent } from './components/nabvar/nabvar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBodyComponent } from './components/homepage-body/homepage-body.component';
import  {app_routing} from './app-routing.module'
import { HttpClientModule } from '@angular/common/http';
import { ApiRestComponent } from './components/api-rest/api-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    NabvarComponent,
    FooterComponent,
    HomepageBodyComponent,
    ApiRestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModuloMaterialModule,
    app_routing,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
