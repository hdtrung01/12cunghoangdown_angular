import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GetInforUserPage } from './get-infor-user.page';

const routes: Routes = [
  {
    path: '',
    component: GetInforUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GetInforUserPageRoutingModule {}
