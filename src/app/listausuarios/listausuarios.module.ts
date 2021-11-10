import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListausuariosPageRoutingModule } from './listausuarios-routing.module';

import { ListausuariosPage } from './listausuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListausuariosPageRoutingModule
  ],
  declarations: [ListausuariosPage]
})
export class ListausuariosPageModule {}
