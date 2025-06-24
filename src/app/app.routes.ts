import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Lista } from './lista/lista';
import { Login } from './login/login';

export const routes: Routes = [
    {path: 'listaDeCompras', component: Lista},
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: Login },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
