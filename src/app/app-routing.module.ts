import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBodyComponent } from './components/homepage-body/homepage-body.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';

const router: Routes = [{
  path:'metapc/Home',
  component:HomepageBodyComponent
},
{
  path:'metapc/Crud',
  component:ListaUsuariosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(router)