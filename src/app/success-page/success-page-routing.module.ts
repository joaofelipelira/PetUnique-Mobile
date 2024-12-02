import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessPagePage } from './success-page.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessPagePageRoutingModule {}
