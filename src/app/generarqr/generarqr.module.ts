import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GenerarqrPage } from './generarqr.page';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'; //Se importa creador QR

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {path: '',
      component: GenerarqrPage}
    ]),
    NgxQRCodeModule, // QR
  ],
  declarations: [GenerarqrPage]
})
export class GenerarqrPageModule {}
