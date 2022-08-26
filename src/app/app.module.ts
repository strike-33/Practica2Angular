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

const appRoutes: Routes=[
  {path: 'inicio', component:CompanyComponent},
  {path: 'Productos', component:CompanyComponent},
  {path: 'Contacto', component:CompanyComponent},
  {path: '**', component:PageNotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    NabvarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModuloMaterialModule,
    RouterModule.forRoot( appRoutes, {enableTracing: true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
