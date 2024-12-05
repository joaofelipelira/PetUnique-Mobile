import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';
import { ProfilePage } from './profile.page';
import { DisplayCondicionalPipe } from '../pipes/display-condicional.pipe'; 

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ProfilePageRoutingModule
  ],
  declarations: [ProfilePage, DisplayCondicionalPipe] 
})
export class ProfilePageModule {}
