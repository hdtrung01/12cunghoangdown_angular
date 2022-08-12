import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExplainZodiacPageRoutingModule } from './explain-zodiac-routing.module';

import { ExplainZodiacPage } from './explain-zodiac.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExplainZodiacPageRoutingModule
  ],
  declarations: [ExplainZodiacPage]
})
export class ExplainZodiacPageModule {}
