import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { SuccessPagePageRoutingModule } from './success-page-routing.module'; // Certifique-se de que o caminho esteja correto

import { SuccessPagePage } from './success-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessPagePageRoutingModule
  ],
  declarations: [SuccessPagePage]
})
export class SuccessPagePageModule {}