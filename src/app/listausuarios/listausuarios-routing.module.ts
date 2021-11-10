import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListausuariosPage } from './listausuarios.page';

const routes: Routes = [
  {
    path: '',
    component: ListausuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListausuariosPageRoutingModule {}
