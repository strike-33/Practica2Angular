import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageBodyComponent } from './components/homepage-body/homepage-body.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import  {ApiRestComponent} from './components/api-rest/api-rest.component';
import{LoginComponent} from './components/login/login.component';

const router: Routes = [{
  path:'metapc/Home',
  component:HomepageBodyComponent
},
{
  path:'metapc/Crud',
  component:ListaUsuariosComponent
},
{
  path:'metapc/Api-Rest',
  component:ApiRestComponent
},
{
  path: 'metapc/productos',
  loadChildren: () => import('./productos/productos.module').then(m => m.ProductosModule)
},
{
  path:'metapc/Login',
  component:LoginComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const app_routing = RouterModule.forRoot(router)