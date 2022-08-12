import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExplainZodiacPage } from './explain-zodiac.page';

const routes: Routes = [
  {
    path: '',
    component: ExplainZodiacPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExplainZodiacPageRoutingModule {}
