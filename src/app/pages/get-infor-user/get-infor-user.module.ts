import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GetInforUserPageRoutingModule } from './get-infor-user-routing.module';

import { GetInforUserPage } from './get-infor-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GetInforUserPageRoutingModule
  ],
  declarations: [GetInforUserPage]
})
export class GetInforUserPageModule {}
