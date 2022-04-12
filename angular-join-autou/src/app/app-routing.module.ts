import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColaboradorComponent } from './colaborador/colaborador.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{ path: '', component: HomeComponent }, 
{
  path: 'colaborador', component: ColaboradorComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  