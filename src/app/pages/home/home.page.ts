import { Time } from '@angular/common';
import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private fullname: string;
  private born_day:Date;
  private born_time:Time;
  private born_place:string;
 
  constructor() {}
   
  public getinfor(fullname:string,born_day:Date,born_time:Time,born_place:string){
  //  fullname=this.
}}
