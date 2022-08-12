import { Component, OnInit } from '@angular/core';
import { Zodiac } from 'src/app/interfaces/zodiac';

import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-get-infor-user',
  templateUrl: './get-infor-user.page.html',
  styleUrls: ['./get-infor-user.page.scss'],
})
export class GetInforUserPage implements OnInit {
  time:string;
  calcTime: Date
  name: string
 tongquan:Zodiac;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
  }
 getData(){

this.calcTime=new Date(this.time)
console.log(this.time)
for(let i=1; i<=12;i++)
this.calcTime.getMonth()

 }
}
