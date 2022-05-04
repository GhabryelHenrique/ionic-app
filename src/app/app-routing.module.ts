import { RegisterPage } from './module/client/pages/register/register.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./module/admin/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'client-home',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./module/admin/pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./module/admin/pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'ofertas',
    loadChildren: () => import('./module/admin/pages/ofertas/ofertas.module').then( m => m.OfertasPageModule)
  },
  {
    path: 'mais',
    loadChildren: () => import('./module/admin/pages/mais/mais.module').then( m => m.MaisPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./module/client/pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./module/client/pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'client-home',
    loadChildren: () => import('./module/client/pages/client-home/client-home.module').then( m => m.ClientHomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
