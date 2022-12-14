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
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideFunctions,getFunctions } from '@angular/fire/functions';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { LoginComponent } from './components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import{AngularFireModule } from '@angular/fire/compat';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component'


@NgModule({
  declarations: [
    AppComponent,
    ListaUsuariosComponent,
    NabvarComponent,
    FooterComponent,
    HomepageBodyComponent,
    ApiRestComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    DashboardComponent,
    RecuperarPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ModuloMaterialModule,
    app_routing,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    ToastrModule.forRoot()

  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
